// Vercel Serverless Function: GET /api/rata?c=199692
// Zwraca minimalną ratę z Credit Space dla podanej ceny przy 15% wkładu i 35 latach
// (te same założenia co "rata od" na stronie starterhome.pl/dostepne-modele).

const LOGIN = process.env.CREDITSPACE_LOGIN || 'starterhome';
const PASSWORD = process.env.CREDITSPACE_PASSWORD || '9EZ3zEsQ';
const OKRES_LAT = 35; // maksymalny okres w Credit Space
const LTV = 85;       // kredyt 85% ceny = wkład własny 15%

// "1.325,63&nbsp;zł" -> 1325.63
function liczba(txt) {
  const s = String(txt || '').replace(/&nbsp;/g, ' ').replace(/[^\d.,]/g, '').replace(/\./g, '').replace(',', '.');
  const n = parseFloat(s);
  return Number.isFinite(n) && n > 0 ? n : null;
}

export default async function handler(req, res) {
  const cena = Math.round(Number(req.query.c));
  if (!Number.isFinite(cena) || cena < 10000 || cena > 5000000) {
    res.status(400).json({ error: 'Nieprawidłowa cena' });
    return;
  }

  try {
    const body = new URLSearchParams({
      u: LOGIN,
      p: PASSWORD,
      co: 'house',
      c: String(cena),
      t: String(OKRES_LAT),
      l: String(LTV),
      id: 'konfigurator',
    });

    const r = await fetch('https://www.creditspace.pl/plugin/ajax.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body,
    });
    const html = await r.text();

    // odpowiedź to fragment JS: $("div#hipoplugin_x #minRate").html("1.325,63&nbsp;zł")
    const pole = (nazwa) => {
      const m = html.match(new RegExp('#' + nazwa + '"\\)\\.html\\("([^"]*)"\\)'));
      return m ? m[1] : null;
    };

    const rata = liczba(pole('minRate'));
    if (!rata) {
      res.status(502).json({ error: 'Brak danych z Credit Space' });
      return;
    }

    // cache na Vercelu: 12 h, potem odświeżenie w tle
    res.setHeader('Cache-Control', 'public, s-maxage=43200, stale-while-revalidate=86400');
    res.status(200).json({
      cena,
      rata,                                  // minimalna rata (zł)
      rataMax: liczba(pole('maxRate')),
      oferty: Number(pole('amountOffers')) || null,
      okresLat: OKRES_LAT,
      wkladProcent: 100 - LTV,
    });
  } catch (e) {
    res.status(502).json({ error: 'Credit Space nie odpowiada' });
  }
}
