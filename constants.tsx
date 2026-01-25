import { ConfigCategory, InputType, House } from './types';
import { 
  Home, 
  BrickWall, 
  FileText, 
  Thermometer, 
  Wind, 
  Sun, 
  Droplet, 
  Waves, 
  LayoutDashboard, 
  Blinds
} from 'lucide-react';

// ==========================================
// DESCRIPTIONS FROM PDF
// ==========================================

const DESC_RAW_CLOSED = `
<p><strong>Stan surowy zamknięty to etap, w którym Twój dom ma już zamkniętą, bezpieczną bryłę, ale nie jest jeszcze domem gotowym do zamieszkania.</strong></p>
<br/>
<p>W praktyce oznacza to, że wykonujemy dla Ciebie:</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li><strong>Konstrukcję budynku</strong> – ściany nośne i stropy zgodnie z projektem.</li>
  <li><strong>Dach z poszyciem</strong> – kompletny dach pokryty blachą na rąbek.</li>
  <li><strong>Stolarkę okienną</strong> – zamontowane okna, dzięki którym bryła domu jest „zamknięta”.</li>
  <li><strong>Gotową elewację</strong> – wykończone ściany zewnętrzne.</li>
  <li><strong>Ocieplenie ścian zewnętrznych</strong> – 10 cm wełny fasadowej.</li>
  <li><strong>Ściany działowe wewnętrzne</strong> – rozprowadzone zgodnie z układem pomieszczeń, przygotowane pod dalsze wykończenie.</li>
</ul>
<br/>
<p>Na tym etapie dom jest zabezpieczony z zewnątrz (przed deszczem, śniegiem, wiatrem), ale w środku to wciąż „plac budowy”.</p>
<p class="mt-2">Brakuje jeszcze m.in.:</p>
<ul class="list-disc pl-5 space-y-1 mt-1">
  <li>instalacji (elektrycznej, wod-kan, ogrzewania, wentylacji),</li>
  <li>wylewek, tynków, płyt GK,</li>
  <li>podłóg, drzwi wewnętrznych, łazienek, kuchni, malowania itd.</li>
</ul>
<br/>
<p><strong>Podsumowując:</strong> Stan surowy zamknięty = dom przygotowany do dalszych prac wykończeniowych, a nie dom gotowy do zamieszkania.</p>
`;

const DESC_DEVELOPER = `
<p><strong>Stan deweloperski to standard, w którym dom ma większy zakres wykonanych prac niż w stanie surowym zamkniętym, ale nadal nie jest domem gotowym do zamieszkania.</strong> Wnętrze jest przygotowane do wykończenia – możesz już planować podłogi, drzwi wewnętrzne, łazienkę, kuchnię i wszystkie „ostatnie szlify”.</p>
<br/>
<p>W praktyce oznacza to, że wykonujemy dla Ciebie:</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li><strong>Wszystko to, co w stanie surowym zamkniętym</strong> (konstrukcja, dach, okna, elewacja).</li>
  <li><strong>Izolację termiczną</strong> – ocieplenie ścian zewnętrznych, a także pozostałych przegród zgodnie ze standardem Starter Home.</li>
  <li><strong>Ściany działowe wewnętrzne</strong> – wykonane, ocieplone i obłożone płytami g-k.</li>
  <li><strong>Płyty g-k na ścianach i sufitach</strong> – równe powierzchnie przygotowane do szpachlowania i malowania.</li>
  <li><strong>Instalacje wewnętrzne</strong> – rozprowadzone instalacje sanitarne i elektryczne, z wyprowadzonymi punktami pod oświetlenie, gniazdka oraz przyłącza w kuchni i łazience.</li>
  <li><strong>Drzwi wejściowe KMT PLUS 54</strong> – zamontowane, domykające i estetycznie dopełniające bryłę domu.</li>
</ul>
<br/>
<p>Brakuje jeszcze m.in.:</p>
<ul class="list-disc pl-5 space-y-1 mt-1">
  <li>ogrzewania – źródła ciepła oraz instalacji grzewczej,</li>
  <li>płyty fundamentowej (oddzielny zakres),</li>
  <li>podłóg, drzwi wewnętrznych, wykończenia łazienek i kuchni.</li>
</ul>
`;

const DESC_FOUNDATION_SLAB = `
<p><strong>Płyta fundamentowa to solidna i ciepła podstawa pod Twój dom Starter Home.</strong> Przygotowujemy grunt, wylewamy zbrojoną płytę z betonu oraz wykonujemy izolacje i przepusty pod instalacje – tak, żeby dom miał stabilny, suchy i dobrze zaizolowany „start”.</p>
<br/>
<p>W praktyce oznacza to, że wykonujemy dla Ciebie:</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li><strong>Przygotowanie terenu</strong> – zerwanie humusu, wykonanie podsypki i jej zagęszczenie.</li>
  <li><strong>Płytę fundamentową</strong> z betonu B25 o grubości 20 cm – wylewka żelbetowa z podwójnym zbrojeniem Ø 6 mm.</li>
  <li><strong>Odpływy hydrauliczne</strong> gotowe pod instalacje – przygotowane przepusty i podejścia pod instalacje sanitarne w płycie.</li>
  <li><strong>Uszczelnienie przeciwwilgociowe</strong> – warstwy zabezpieczające płytę przed podciąganiem wilgoci z gruntu.</li>
  <li><strong>Izolację termiczną XPS 10 cm</strong> – ocieplenie od gruntu, dzięki któremu dom startuje z „ciepłą” podstawą i ograniczonymi stratami energii.</li>
</ul>
<br/>
<p><strong>Uwaga:</strong> Płyta fundamentowa nie obejmuje doprowadzenia zewnętrznych przyłączy (woda, kanalizacja, prąd, gaz) do działki ani zagospodarowania terenu wokół.</p>
`;

const DESC_FORMALITIES_SERVICE = `
<p><strong>Opcja „Zlecam Wam” oznacza, że przejmujemy na siebie obsługę formalności urzędowych związanych ze zgłoszeniem lub pozwoleniem na budowę.</strong> Ty wybierasz projekt i standard domu, a my zajmujemy się „papierologią” w urzędzie.</p>
<br/>
<p>W praktyce oznacza to, że wykonujemy dla Ciebie m.in.:</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li><strong>Przygotowanie dokumentów</strong> do zgłoszenia lub pozwolenia na budowę.</li>
  <li><strong>Wypełnienie i złożenie wniosku</strong> w odpowiednim urzędzie (starostwo / urząd miasta).</li>
  <li><strong>Kontakt z urzędem</strong> w sprawie wniosku – odpowiadamy na wezwania, uzupełniamy braki.</li>
  <li><strong>Prowadzenie sprawy</strong> aż do zakończenia procedury (decyzja o pozwoleniu lub skuteczne zgłoszenie).</li>
</ul>
<br/>
<p>Formalności nie obejmują zakupu działki, uzyskania finansowania (kredytu) ani zgłoszenia zakończenia budowy (to osobny etap).</p>
`;

const DESC_FORMALITIES_SELF = `
<p><strong>Opcja „Robię we własnym zakresie” oznacza, że wszystkie formalności urzędowe związane ze zgłoszeniem lub pozwoleniem na budowę załatwiasz samodzielnie jako inwestor.</strong></p>
<br/>
<p>W praktyce oznacza to, że to Ty:</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li>Zbierasz wymagane dokumenty (mapy, wypisy, warunki zabudowy).</li>
  <li>Organizujesz dokumentację do zgłoszenia lub pozwolenia na budowę (współpracujesz z projektantem).</li>
  <li>Samodzielnie wypełniasz i składasz wniosek w urzędzie.</li>
  <li>Prowadzisz korespondencję z urzędem i pilnujesz terminów.</li>
</ul>
<br/>
<p>Starter Home w tym wariancie dostarcza Ci jedynie dokumenty domu zgodnie z umową (projekt), ale nie reprezentuje Cię w urzędzie.</p>
`;

const DESC_HEATING_FLOOR_ELECTRIC = `
<p><strong>Ogrzewanie podłogowe elektryczne to prosty w obsłudze system grzewczy, w którym źródłem ciepła są przewody lub maty grzewcze zatopione w podłodze.</strong></p>
<br/>
<p>W praktyce oznacza to, że wykonujemy dla Ciebie:</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li><strong>Projekt rozmieszczenia</strong> ogrzewania podłogowego.</li>
  <li><strong>Ułożenie przewodów / mat grzewczych</strong> w podłodze (w wybranych pomieszczeniach zgodnie z projektem).</li>
  <li><strong>Podłączenie do instalacji elektrycznej</strong> wraz z zabezpieczeniami.</li>
  <li><strong>Montaż regulatorów / termostatów pokojowych</strong> – komfortowe sterowanie temperaturą.</li>
</ul>
<br/>
<p>Otrzymujesz kompletny, sprawny system gotowy do pracy po ułożeniu podłóg. Nie obejmuje kosztów zużycia energii ani dodatkowych źródeł ciepła (np. kominek).</p>
`;

const DESC_HEATING_PUMP = `
<p><strong>To rozwiązanie, w którym główne źródło ciepła dla domu stanowi pompa ciepła powietrze–woda, współpracująca z wodnym ogrzewaniem podłogowym.</strong> Cały system tworzy nowoczesne, niskoenergetyczne ogrzewanie domu.</p>
<br/>
<p>W praktyce oznacza to, że wykonujemy dla Ciebie:</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li><strong>Projekt instalacji</strong> ogrzewania podłogowego wodnego.</li>
  <li><strong>Ułożenie rur ogrzewania</strong> w podłodze oraz montaż rozdzielaczy i osprzętu.</li>
  <li><strong>Montaż i uruchomienie pompy ciepła</strong> powietrze–woda SPLIT Hisense „All in One” (4 kW lub 6 kW) ze zintegrowanym zasobnikiem CWU 230l.</li>
  <li><strong>Podłączenie instalacji</strong> (spięcie hydrauliczne) oraz konfigurację i uruchomienie systemu.</li>
</ul>
<br/>
<p>Jest to kompletny system ogrzewania domu i ciepłej wody użytkowej.</p>
`;

const DESC_HEATING_WATER_ONLY = `
<p><strong>Ta opcja jest dla osób, które chcą mieć zrobione profesjonalnie ogrzewanie podłogowe wodne, ale same wybiorą i kupią źródło ciepła (np. pompę ciepła innej firmy, kocioł gazowy, kocioł na pellet).</strong></p>
<br/>
<p>W praktyce oznacza to, że wykonujemy dla Ciebie:</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li>Projekt instalacji ogrzewania podłogowego wodnego.</li>
  <li>Ułożenie rur ogrzewania podłogowego w podłodze.</li>
  <li>Montaż rozdzielaczy i osprzętu.</li>
  <li>Przygotowanie wyprowadzeń instalacji pod przyszłe źródło ciepła.</li>
</ul>
<br/>
<p><strong>Uwaga:</strong> Standard ten NIE obejmuje zakupu i montażu pompy ciepła/kotła ani uruchomienia całego systemu.</p>
`;

const DESC_HEATING_AC = `
<p><strong>Klimatyzator z funkcją grzania zapewnia chłodzenie latem i dogrzewanie w okresach przejściowych (wiosna/jesień).</strong> Jest świetnym uzupełnieniem podstawowego systemu ogrzewania.</p>
<br/>
<p>W praktyce oznacza to, że wykonujemy dla Ciebie:</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li>Dobór klimatyzatora dostosowanego do pomieszczeń.</li>
  <li>Montaż jednostki wewnętrznej i zewnętrznej.</li>
  <li>Wykonanie instalacji chłodniczej i odwodnienie skroplin.</li>
  <li>Podłączenie do prądu i uruchomienie.</li>
</ul>
<br/>
<p>Urządzenie chłodzi latem i dogrzewa w chłodniejsze dni, sterowane pilotem lub aplikacją.</p>
`;

const DESC_AC_SINGLE = `
<p><strong>Klimatyzacja z jedną jednostką wewnętrzną to rozwiązanie, w którym chłodzone (i opcjonalnie dogrzewane) jest przede wszystkim jedno kluczowe pomieszczenie – najczęściej salon z aneksem.</strong></p>
<br/>
<p>W praktyce oznacza to, że wykonujemy dla Ciebie:</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li>Dostawę kompletnego zestawu klimatyzacji typu split (jednostka wew. + zew.).</li>
  <li>Montaż jednostek w uzgodnionych miejscach.</li>
  <li>Wykonanie instalacji chłodniczej, odprowadzenie skroplin i podłączenie elektryczne.</li>
  <li>Uruchomienie i przeszkolenie z obsługi.</li>
</ul>
`;

const DESC_PV = `
<p><strong>Fotowoltaika w Starter Home to kompletny zestaw instalacji PV z magazynem energii, dopasowany do konkretnego projektu domu.</strong></p>
<br/>
<p>W praktyce oznacza to, że wykonujemy dla Ciebie:</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li><strong>Dostawę kompletnego zestawu:</strong> panele Ja Solar Bifacial 500 W (czarna rama), falownik hybrydowy Deye, magazyn energii (Deye lub Kon-Tec).</li>
  <li><strong>Montaż paneli</strong> na dachu.</li>
  <li><strong>Wykonanie instalacji elektrycznej</strong> (DC/AC), podłączenie falownika i magazynu energii.</li>
  <li><strong>Konfigurację systemu</strong>.</li>
  <li>W wersji z zasilaniem awaryjnym: przygotowanie wybranych obwodów do pracy w trybie backup.</li>
</ul>
`;

const DESC_SEPTIC = `
<p><strong>Szambo betonowe 10 m³ to szczelny, jednoprzestrzenny zbiornik na ścieki dla domów, które nie są podłączone do kanalizacji.</strong></p>
<br/>
<p>Zapewniamy:</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li>Jednokomorowy zbiornik betonowy o poj. 10 000 l (klasa betonu B25-B40 W8).</li>
  <li>Szczelną, zbrojoną konstrukcję z hydroizolacją.</li>
  <li>Płytę górną i właz.</li>
  <li>Transport, wykop i profesjonalne osadzenie zbiornika.</li>
  <li>Komplet dokumentów (atest PZH, aprobata ITB, gwarancja).</li>
</ul>
`;

const DESC_TREATMENT = `
<p><strong>Przydomowa oczyszczalnia ścieków (3000 l) to ekologiczna alternatywa dla szamba.</strong></p>
<br/>
<p>W praktyce zapewniamy:</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li><strong>Osadnik gnilny 3000 l</strong> (Metria B3) wykonany w technologii rotomouldingu (trwały, szczelny).</li>
  <li><strong>Kompletny system drenażowy 18 mb</strong> (studzienka, rury, geowłóknina).</li>
  <li>Filtr końcowy.</li>
  <li>Montaż i uruchomienie.</li>
</ul>
<br/>
<p>Oczyszczalnia wymaga znacznie rzadszego wywozu osadów niż tradycyjne szambo.</p>
`;

const DESC_TERRACE = `
<p><strong>Taras z pergolą to dodatkowa, zewnętrzna przestrzeń do życia.</strong> Wykonujemy go jako stabilną, drewnianą konstrukcję.</p>
<br/>
<p>W skład wchodzi:</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li><strong>Fundamenty punktowe</strong> (betonowe).</li>
  <li><strong>Konstrukcja z drewna C24</strong> (certyfikowane, wytrzymałe).</li>
  <li><strong>Poszycie tarasu z deski modrzewiowej</strong> (odporna na warunki atmosferyczne).</li>
</ul>
<br/>
<p>Cena w konfiguratorze jest podana za 1 m² kompletnego tarasu.</p>
`;

const DESC_BLINDS = `
<p><strong>Rolety zewnętrzne to sztywne, aluminiowe osłony montowane na zewnątrz okien, w skrzynce z prowadnicami.</strong></p>
<br/>
<p>Zapewniają:</p>
<ul class="list-disc pl-5 space-y-2 mt-2">
  <li>Poprawę komfortu termicznego (chłodniej latem, cieplej zimą).</li>
  <li>Zaciemnienie pomieszczeń.</li>
  <li>Zwiększenie prywatności i bezpieczeństwa.</li>
</ul>
<br/>
<p>W cenie zawarta jest dostawa, montaż na elewacji/oknie, podłączenie sterowania (elektryczne) i regulacja.</p>
`;

export const HOUSES: House[] = [
  { 
    id: 'nest_house', 
    name: 'NEST HOUSE', 
    status: 'COMPLETED', 
    basePrice: 164700, 
    area: '70 m²', // Fallback
    details: {
      builtArea: '55 m²',
      usableArea: '45 m²',
      bedrooms: 2
    },
    description: 'Dom o powierzchni użytkowej 45 m² został zaprojektowany z myślą o funkcjonalności. Posiada dwie sypialnie, salon z aneksem kuchennym oraz łazienkę, tworząc praktyczną i komfortową przestrzeń do codziennego życia.',
    image: 'https://starterhome.pl/wp-content/uploads/2025/09/Nest-House-1-scaled.png',
    floorPlanPdf: 'https://todybnsadf.cfolks.pl/Nest.pdf'
  },
  { 
    id: 'haven_house', 
    name: 'Haven HOUSE', 
    status: 'COMPLETED', 
    basePrice: 184900, 
    area: 'Do ustalenia',
    details: {
      builtArea: '69 m²',
      usableArea: '58 m²',
      bedrooms: 2
    },
    description: 'Praktyczny dom o 58 m² powierzchni użytkowej łączy funkcjonalność z komfortem. Znajdują się w nim dwie sypialnie, otwarty salon z kuchnią oraz łazienka, tworząc spójną i przyjazną przestrzeń mieszkalną.',
    image: 'https://starterhome.pl/wp-content/uploads/2025/09/Haven-House-1.png',
    floorPlanPdf: 'https://todybnsadf.cfolks.pl/Haven.pdf'
  },
  { 
    id: 'balance_house', 
    name: 'Balance HOUSE', 
    status: 'COMPLETED', 
    basePrice: 224900, 
    area: 'Do ustalenia',
    details: {
      builtArea: '94 m²',
      usableArea: '80 m²',
      bedrooms: 3
    },
    description: 'Dom o 80 m² powierzchni użytkowej oferuje komfortową przestrzeń dla rodziny. Składa się z trzech sypialni, salonu z aneksem kuchennym oraz łazienki, zapewniając wygodne i funkcjonalne wnętrze do codziennego życia.',
    image: 'https://starterhome.pl/wp-content/uploads/2025/09/Balance-House-1-1024x768.png',
    floorPlanPdf: 'https://todybnsadf.cfolks.pl/Balance.pdf'
  },
  { 
    id: 'comfort_house', 
    name: 'Comfort HOUSE', 
    status: 'COMPLETED', 
    basePrice: 273400, 
    area: 'Do ustalenia',
    details: {
      builtArea: '103 m²',
      usableArea: '86 m²',
      bedrooms: 3
    },
    description: 'Comfort House to parterowy dom o powierzchni 86 m², stworzony z myślą o wygodzie rodziny. Posiada trzy sypialnie oraz otwartą część dzienną, w której salon płynnie łączy się z kuchnią, zapewniając praktyczną i przyjazną przestrzeń do życia.',
    image: 'https://starterhome.pl/wp-content/uploads/2025/09/Comfort-House-1-1024x768.png',
    floorPlanPdf: 'https://todybnsadf.cfolks.pl/Comfort.pdf'
  },
  { 
    id: 'vista_house', 
    name: 'Vista HOUSE', 
    status: 'COMPLETED', 
    basePrice: 295700, 
    area: 'Do ustalenia',
    details: {
      builtArea: '126 m²',
      usableArea: '108 m²',
      bedrooms: '3-4'
    },
    description: 'Duży, komfortowy dom o 108 m² powierzchni użytkowej zapewnia przestrzeń i wygodę dla całej rodziny. Składa się z trzech sypialni, salonu z aneksem kuchennym oraz łazienki, oferując funkcjonalne wnętrze, w którym każdy znajdzie swoje miejsce i swobodę codziennego życia.',
    image: 'https://starterhome.pl/wp-content/uploads/2025/10/Vista-House-1-1024x768.png',
    floorPlanPdf: 'https://todybnsadf.cfolks.pl/Vista.pdf'
  },
  { 
    id: 'peak_house', 
    name: 'Peak HOUSE', 
    status: 'COMPLETED', 
    basePrice: 259800, 
    area: 'Do ustalenia',
    details: {
      builtArea: '67 m²',
      usableArea: '111 m²',
      bedrooms: '3-4'
    },
    description: 'Piętrowy dom o 111 m² powierzchni użytkowej łączy przestronność z funkcjonalnością. Na parterze znajdują się salon z aneksem kuchennym, łazienka oraz sypialnia, a na piętrze dwie kolejne sypialnie, tworząc wygodne i komfortowe wnętrze dla całej rodziny.',
    image: 'https://starterhome.pl/wp-content/uploads/2025/09/Peak-House-1-scaled.png',
    floorPlanPdf: 'https://todybnsadf.cfolks.pl/Peak.pdf'
  },
  { 
    id: 'skyline_house', 
    name: 'Skyline HOUSE', 
    status: 'COMPLETED', 
    basePrice: 174900, 
    area: 'Do ustalenia',
    details: {
      builtArea: '35 m²',
      usableArea: '45 m²',
      bedrooms: '1-3'
    },
    description: 'Nowoczesny dom o formie stodoły, 35 m², z praktycznym parterem i antresolą. Szerokie okna gwarantują jasne wnętrza i atrakcyjne widoki na otoczenie.',
    image: 'https://starterhome.pl/wp-content/uploads/2025/10/ujecie-1-scaled.png',
    floorPlanPdf: 'https://todybnsadf.cfolks.pl/Skyline.pdf'
  },
  { 
    id: 'zenith_house', 
    name: 'Zenith HOUSE', 
    status: 'COMPLETED', 
    basePrice: 184900, 
    area: 'Do ustalenia',
    details: {
      builtArea: '35 m²',
      usableArea: '55 m²',
      bedrooms: 2
    },
    description: 'Zenith House 35 m² łączy elegancję z przytulnością. Duże przeszklenia na bocznej ścianie nadają budynkowi wyjątkowy, nowoczesny charakter, a dwuspadowy dach urozmaica bryłę. Funkcjonalne wnętrze zapewnia komfortową przestrzeń dla rodziny.',
    image: 'https://starterhome.pl/wp-content/uploads/2025/10/enhanced_ujecie-1-przod-scaled.png',
    floorPlanPdf: 'https://todybnsadf.cfolks.pl/Zenith.pdf'
  },
];

// Common PV Info Text
const PV_INFO_TEXT = 'W instalacjach stosujemy: Panele Ja Solar Bifacial 500W (czarna rama), falownik hybrydowy Deye, magazyn energii Deye lub Kon-Tec. Wizualizacja oraz wycena jest orientacyjna (brak dokładnego projektu dachu).';

const NEST_HOUSE_CONFIG: ConfigCategory[] = [
  {
    id: 'base_stage',
    title: 'Stan Inwestycji',
    iconName: 'Home',
    inputType: InputType.RADIO,
    variants: [
      { id: 'raw_closed', label: 'Stan surowy zamknięty', price: 164000, description: 'Konstrukcja, ściany, dach, okna, drzwi zewnętrzne.', detailsHtml: DESC_RAW_CLOSED },
      { id: 'developer', label: 'Stan deweloperski', price: 219800, description: 'Instalacje, tynki, wylewki, ocieplenie.', detailsHtml: DESC_DEVELOPER }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundamenty',
    iconName: 'BrickWall',
    inputType: InputType.RADIO,
    variants: [
      { id: 'slab', label: 'Płyta fundamentowa (wykonanie)', price: 41250, detailsHtml: DESC_FOUNDATION_SLAB },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'formalities',
    title: 'Formalności urzędowe',
    iconName: 'FileText',
    inputType: InputType.RADIO,
    variants: [
      { id: 'service', label: 'Zlecam Wam (Pozwolenie/Zgłoszenie)', price: 9500, detailsHtml: DESC_FORMALITIES_SERVICE },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0, detailsHtml: DESC_FORMALITIES_SELF }
    ]
  },
  {
    id: 'heating',
    title: 'Ogrzewanie',
    iconName: 'Thermometer',
    inputType: InputType.SELECT, 
    variants: [
      { id: 'none', label: 'Brak ogrzewania', price: 0 },
      { id: 'floor_electric', label: 'Ogrzewanie podłogowe elektryczne', price: 22700, detailsHtml: DESC_HEATING_FLOOR_ELECTRIC },
      { id: 'floor_water_pump', label: 'Podłogowe wodne + Pompa ciepła + Wylewka', price: 48500, detailsHtml: DESC_HEATING_PUMP },
      { id: 'floor_water_only', label: 'Podłogowe wodne (samo rozłożenie) + Klient kupuje pompę', price: 19800, detailsHtml: DESC_HEATING_WATER_ONLY },
      { id: 'ac_heat', label: 'Klimatyzator z funkcją grzania', price: 7000, detailsHtml: DESC_HEATING_AC }
    ]
  },
  {
    id: 'ac',
    title: 'Klimatyzacja 3,5kW',
    iconName: 'Wind',
    inputType: InputType.RADIO,
    info: 'Jeśli chcesz inną ilość jednostek, wycena jest indywidualna.',
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'unit_1', label: '1 jednostka', price: 7000, detailsHtml: DESC_AC_SINGLE }
    ]
  },
  {
    id: 'pv',
    title: 'Fotowoltaika (Hybrydowa)',
    iconName: 'Sun',
    inputType: InputType.RADIO,
    info: PV_INFO_TEXT,
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'standard', label: '4kW + Magazyn 10.24kWh', price: 20000, description: 'Falownik Hybrydowy Deye + Magazyn energii Deye 10,24kWh', detailsHtml: DESC_PV },
      { id: 'backup', label: '4kW + Magazyn 10.24kWh + Zasilanie Awaryjne', price: 21500, description: 'Falownik Hybrydowy Deye + Magazyn energii Deye 10,24kWh + Zasilanie awaryjne (+1500zł)', detailsHtml: DESC_PV }
    ]
  },
  {
    id: 'septic',
    title: 'Szambo',
    iconName: 'Droplet',
    inputType: InputType.CHECKBOX,
    basePrice: 14500,
    detailsHtml: DESC_SEPTIC
  },
  {
    id: 'treatment',
    title: 'Przydomowa oczyszczalnia ścieków',
    iconName: 'Waves',
    inputType: InputType.CHECKBOX,
    basePrice: 18400,
    detailsHtml: DESC_TREATMENT
  },
  {
    id: 'terrace',
    title: 'Taras',
    iconName: 'LayoutDashboard',
    inputType: InputType.NUMBER,
    unitPrice: 990,
    unitLabel: 'm²',
    detailsHtml: DESC_TERRACE
  },
  {
    id: 'blinds',
    title: 'Rolety',
    iconName: 'Blinds',
    inputType: InputType.CHECKBOX,
    basePrice: 11800,
    detailsHtml: DESC_BLINDS
  }
];

const HAVEN_HOUSE_CONFIG: ConfigCategory[] = [
  {
    id: 'base_stage',
    title: 'Stan Inwestycji',
    iconName: 'Home',
    inputType: InputType.RADIO,
    variants: [
      { id: 'raw_closed', label: 'Stan surowy zamknięty', price: 184900, description: 'Konstrukcja, ściany, dach, okna, drzwi zewnętrzne.', detailsHtml: DESC_RAW_CLOSED },
      { id: 'developer', label: 'Stan deweloperski', price: 286700, description: 'Instalacje, tynki, wylewki, ocieplenie.', detailsHtml: DESC_DEVELOPER }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundamenty',
    iconName: 'BrickWall',
    inputType: InputType.RADIO,
    variants: [
      { id: 'slab', label: 'Płyta fundamentowa (wykonanie)', price: 51750, detailsHtml: DESC_FOUNDATION_SLAB },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'formalities',
    title: 'Formalności urzędowe',
    iconName: 'FileText',
    inputType: InputType.RADIO,
    variants: [
      { id: 'service', label: 'Zlecam Wam (Pozwolenie/Zgłoszenie)', price: 9500, detailsHtml: DESC_FORMALITIES_SERVICE },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0, detailsHtml: DESC_FORMALITIES_SELF }
    ]
  },
  {
    id: 'heating',
    title: 'Ogrzewanie',
    iconName: 'Thermometer',
    inputType: InputType.SELECT, 
    variants: [
      { id: 'none', label: 'Brak ogrzewania', price: 0 },
      { id: 'floor_electric', label: 'Ogrzewanie podłogowe elektryczne', price: 28770, detailsHtml: DESC_HEATING_FLOOR_ELECTRIC },
      { id: 'floor_water_pump', label: 'Podłogowe wodne + Pompa ciepła + Wylewka', price: 58800, detailsHtml: DESC_HEATING_PUMP },
      { id: 'floor_water_only', label: 'Podłogowe wodne (samo rozłożenie) + Klient kupuje pompę', price: 23800, detailsHtml: DESC_HEATING_WATER_ONLY },
      { id: 'ac_heat', label: 'Klimatyzator z funkcją grzania', price: 7000, detailsHtml: DESC_HEATING_AC }
    ]
  },
  {
    id: 'ac',
    title: 'Klimatyzacja 3,5kW',
    iconName: 'Wind',
    inputType: InputType.RADIO,
    info: 'Jeśli chcesz inną ilość jednostek, wycena jest indywidualna.',
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'unit_1', label: '1 jednostka', price: 7000, detailsHtml: DESC_AC_SINGLE }
    ]
  },
  {
    id: 'pv',
    title: 'Fotowoltaika (Hybrydowa)',
    iconName: 'Sun',
    inputType: InputType.RADIO,
    info: PV_INFO_TEXT,
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'standard', label: '4kW + Magazyn 10.24kWh', price: 20000, description: 'Falownik Hybrydowy Deye + Magazyn energii Deye 10,24kWh', detailsHtml: DESC_PV },
      { id: 'backup', label: '4kW + Magazyn 10.24kWh + Zasilanie Awaryjne', price: 21500, description: 'Falownik Hybrydowy Deye + Magazyn energii Deye 10,24kWh + Zasilanie awaryjne (+1500zł)', detailsHtml: DESC_PV }
    ]
  },
  {
    id: 'septic',
    title: 'Szambo',
    iconName: 'Droplet',
    inputType: InputType.CHECKBOX,
    basePrice: 14500,
    detailsHtml: DESC_SEPTIC
  },
  {
    id: 'treatment',
    title: 'Przydomowa oczyszczalnia ścieków',
    iconName: 'Waves',
    inputType: InputType.CHECKBOX,
    basePrice: 17400,
    detailsHtml: DESC_TREATMENT
  },
  {
    id: 'terrace',
    title: 'Taras',
    iconName: 'LayoutDashboard',
    inputType: InputType.NUMBER,
    unitPrice: 990,
    unitLabel: 'm²',
    detailsHtml: DESC_TERRACE
  },
  {
    id: 'blinds',
    title: 'Rolety',
    iconName: 'Blinds',
    inputType: InputType.CHECKBOX,
    basePrice: 9500,
    detailsHtml: DESC_BLINDS
  }
];

const BALANCE_HOUSE_CONFIG: ConfigCategory[] = [
  {
    id: 'base_stage',
    title: 'Stan Inwestycji',
    iconName: 'Home',
    inputType: InputType.RADIO,
    variants: [
      { id: 'raw_closed', label: 'Stan surowy zamknięty', price: 224900, description: 'Konstrukcja, ściany, dach, okna, drzwi zewnętrzne.', detailsHtml: DESC_RAW_CLOSED },
      { id: 'developer', label: 'Stan deweloperski', price: 329700, description: 'Instalacje, tynki, wylewki, ocieplenie.', detailsHtml: DESC_DEVELOPER }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundamenty',
    iconName: 'BrickWall',
    inputType: InputType.RADIO,
    variants: [
      { id: 'slab', label: 'Płyta fundamentowa (wykonanie)', price: 72250, detailsHtml: DESC_FOUNDATION_SLAB },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'formalities',
    title: 'Formalności urzędowe',
    iconName: 'FileText',
    inputType: InputType.RADIO,
    variants: [
      { id: 'service', label: 'Zlecam Wam (Pozwolenie/Zgłoszenie)', price: 9500, detailsHtml: DESC_FORMALITIES_SERVICE },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0, detailsHtml: DESC_FORMALITIES_SELF }
    ]
  },
  {
    id: 'heating',
    title: 'Ogrzewanie',
    iconName: 'Thermometer',
    inputType: InputType.SELECT, 
    variants: [
      { id: 'none', label: 'Brak ogrzewania', price: 0 },
      { id: 'floor_electric', label: 'Ogrzewanie podłogowe elektryczne', price: 39050, detailsHtml: DESC_HEATING_FLOOR_ELECTRIC },
      { id: 'floor_water_pump', label: 'Podłogowe wodne + Pompa ciepła + Wylewka', price: 67200, detailsHtml: DESC_HEATING_PUMP },
      { id: 'floor_water_only', label: 'Podłogowe wodne (samo rozłożenie) + Klient kupuje pompę', price: 30800, detailsHtml: DESC_HEATING_WATER_ONLY },
      { id: 'ac_heat', label: 'Klimatyzator z funkcją grzania 5kW', price: 7000, detailsHtml: DESC_HEATING_AC }
    ]
  },
  {
    id: 'ac',
    title: 'Klimatyzacja 5kW',
    iconName: 'Wind',
    inputType: InputType.RADIO,
    info: 'Jeśli chcesz inną ilość jednostek, wycena jest indywidualna.',
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'unit_1', label: '1 jednostka', price: 7000, detailsHtml: DESC_AC_SINGLE }
    ]
  },
  {
    id: 'pv',
    title: 'Fotowoltaika (Hybrydowa)',
    iconName: 'Sun',
    inputType: InputType.RADIO,
    info: PV_INFO_TEXT,
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'standard', label: '10kW + Magazyn 15.36kWh', price: 42685, description: 'Falownik Hybrydowy Deye + Magazyn energii Deye 15,36kWh', detailsHtml: DESC_PV },
      { id: 'backup', label: '10kW + Magazyn 15.36kWh + Zasilanie Awaryjne', price: 44185, description: 'Falownik Hybrydowy Deye + Magazyn energii Deye 15,36kWh + Zasilanie awaryjne (+1500zł)', detailsHtml: DESC_PV }
    ]
  },
  {
    id: 'septic',
    title: 'Szambo',
    iconName: 'Droplet',
    inputType: InputType.CHECKBOX,
    basePrice: 14500,
    detailsHtml: DESC_SEPTIC
  },
  {
    id: 'treatment',
    title: 'Przydomowa oczyszczalnia ścieków',
    iconName: 'Waves',
    inputType: InputType.CHECKBOX,
    basePrice: 17400,
    detailsHtml: DESC_TREATMENT
  },
  {
    id: 'terrace',
    title: 'Taras',
    iconName: 'LayoutDashboard',
    inputType: InputType.NUMBER,
    unitPrice: 990,
    unitLabel: 'm²',
    detailsHtml: DESC_TERRACE
  },
  {
    id: 'blinds',
    title: 'Rolety',
    iconName: 'Blinds',
    inputType: InputType.CHECKBOX,
    basePrice: 10500,
    detailsHtml: DESC_BLINDS
  }
];

const COMFORT_HOUSE_CONFIG: ConfigCategory[] = [
  {
    id: 'base_stage',
    title: 'Stan Inwestycji',
    iconName: 'Home',
    inputType: InputType.RADIO,
    variants: [
      { id: 'raw_closed', label: 'Stan surowy zamknięty', price: 273400, description: 'Konstrukcja, ściany, dach, okna, drzwi zewnętrzne.', detailsHtml: DESC_RAW_CLOSED },
      { id: 'developer', label: 'Stan deweloperski', price: 377700, description: 'Instalacje, tynki, wylewki, ocieplenie.', detailsHtml: DESC_DEVELOPER }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundamenty',
    iconName: 'BrickWall',
    inputType: InputType.RADIO,
    variants: [
      { id: 'slab', label: 'Płyta fundamentowa (wykonanie)', price: 77250, detailsHtml: DESC_FOUNDATION_SLAB },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'formalities',
    title: 'Formalności urzędowe',
    iconName: 'FileText',
    inputType: InputType.RADIO,
    variants: [
      { id: 'service', label: 'Zlecam Wam (Pozwolenie/Zgłoszenie)', price: 9500, detailsHtml: DESC_FORMALITIES_SERVICE },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0, detailsHtml: DESC_FORMALITIES_SELF }
    ]
  },
  {
    id: 'heating',
    title: 'Ogrzewanie',
    iconName: 'Thermometer',
    inputType: InputType.SELECT, 
    variants: [
      { id: 'none', label: 'Brak ogrzewania', price: 0 },
      { id: 'floor_electric', label: 'Ogrzewanie podłogowe elektryczne', price: 42300, detailsHtml: DESC_HEATING_FLOOR_ELECTRIC },
      { id: 'floor_water_pump', label: 'Podłogowe wodne + Pompa ciepła + Wylewka', price: 68800, detailsHtml: DESC_HEATING_PUMP },
      { id: 'floor_water_only', label: 'Podłogowe wodne (samo rozłożenie) + Klient kupuje pompę', price: 33800, detailsHtml: DESC_HEATING_WATER_ONLY },
      { id: 'ac_heat', label: 'Klimatyzator 5kW z funkcją grzania', price: 8000, detailsHtml: DESC_HEATING_AC }
    ]
  },
  {
    id: 'ac',
    title: 'Klimatyzacja 5kW',
    iconName: 'Wind',
    inputType: InputType.RADIO,
    info: 'Jeśli chcesz inną ilość jednostek, wycena jest indywidualna.',
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'unit_1', label: '1 jednostka', price: 7000, detailsHtml: DESC_AC_SINGLE }
    ]
  },
  {
    id: 'pv',
    title: 'Fotowoltaika (Hybrydowa)',
    iconName: 'Sun',
    inputType: InputType.RADIO,
    info: PV_INFO_TEXT,
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'standard', label: '5.5kW + Magazyn 10.24kWh', price: 20000, description: 'Falownik Hybrydowy Deye + Magazyn energii Deye 10,24kWh', detailsHtml: DESC_PV },
      { id: 'backup', label: '5.5kW + Magazyn 10.24kWh + Zasilanie Awaryjne', price: 21500, description: 'Falownik Hybrydowy Deye + Magazyn energii Deye 10,24kWh + Zasilanie awaryjne (+1500zł)', detailsHtml: DESC_PV }
    ]
  },
  {
    id: 'septic',
    title: 'Szambo',
    iconName: 'Droplet',
    inputType: InputType.CHECKBOX,
    basePrice: 14500,
    detailsHtml: DESC_SEPTIC
  },
  {
    id: 'treatment',
    title: 'Przydomowa oczyszczalnia ścieków',
    iconName: 'Waves',
    inputType: InputType.CHECKBOX,
    basePrice: 17400,
    detailsHtml: DESC_TREATMENT
  },
  {
    id: 'terrace',
    title: 'Taras',
    iconName: 'LayoutDashboard',
    inputType: InputType.NUMBER,
    unitPrice: 990,
    unitLabel: 'm²',
    detailsHtml: DESC_TERRACE
  },
  {
    id: 'blinds',
    title: 'Rolety',
    iconName: 'Blinds',
    inputType: InputType.CHECKBOX,
    basePrice: 11900,
    detailsHtml: DESC_BLINDS
  }
];

const VISTA_HOUSE_CONFIG: ConfigCategory[] = [
  {
    id: 'base_stage',
    title: 'Stan Inwestycji',
    iconName: 'Home',
    inputType: InputType.RADIO,
    variants: [
      { id: 'raw_closed', label: 'Stan surowy zamknięty', price: 295700, description: 'Konstrukcja, ściany, dach, okna, drzwi zewnętrzne.', detailsHtml: DESC_RAW_CLOSED },
      { id: 'developer', label: 'Stan deweloperski', price: 420900, description: 'Instalacje, tynki, wylewki, ocieplenie.', detailsHtml: DESC_DEVELOPER }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundamenty',
    iconName: 'BrickWall',
    inputType: InputType.RADIO,
    variants: [
      { id: 'slab', label: 'Płyta fundamentowa (wykonanie)', price: 94500, detailsHtml: DESC_FOUNDATION_SLAB },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'formalities',
    title: 'Formalności urzędowe',
    iconName: 'FileText',
    inputType: InputType.RADIO,
    variants: [
      { id: 'service', label: 'Zlecam Wam (Pozwolenie/Zgłoszenie)', price: 9500, detailsHtml: DESC_FORMALITIES_SERVICE },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0, detailsHtml: DESC_FORMALITIES_SELF }
    ]
  },
  {
    id: 'heating',
    title: 'Ogrzewanie',
    iconName: 'Thermometer',
    inputType: InputType.SELECT, 
    variants: [
      { id: 'none', label: 'Brak ogrzewania', price: 0 },
      { id: 'floor_electric', label: 'Ogrzewanie podłogowe elektryczne', price: 55100, detailsHtml: DESC_HEATING_FLOOR_ELECTRIC },
      { id: 'floor_water_pump', label: 'Podłogowe wodne + Pompa ciepła + Wylewka', price: 77600, detailsHtml: DESC_HEATING_PUMP },
      { id: 'floor_water_only', label: 'Podłogowe wodne (samo rozłożenie) + Klient kupuje pompę', price: 37800, detailsHtml: DESC_HEATING_WATER_ONLY },
      { id: 'ac_heat', label: 'Klimatyzator z funkcją grzania', price: 8000, detailsHtml: DESC_HEATING_AC }
    ]
  },
  {
    id: 'ac',
    title: 'Klimatyzacja 5kW',
    iconName: 'Wind',
    inputType: InputType.RADIO,
    info: 'Jeśli chcesz inną ilość jednostek, wycena jest indywidualna.',
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'unit_1', label: '1 jednostka', price: 8000, detailsHtml: DESC_AC_SINGLE }
    ]
  },
  {
    id: 'pv',
    title: 'Fotowoltaika (Hybrydowa)',
    iconName: 'Sun',
    inputType: InputType.RADIO,
    info: PV_INFO_TEXT,
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'standard', label: '10kW + Magazyn 15.36kWh', price: 20000, description: 'Falownik Hybrydowy Deye + Magazyn energii Deye 15,36kWh', detailsHtml: DESC_PV },
      { id: 'backup', label: '10kW + Magazyn 15.36kWh + Zasilanie Awaryjne', price: 21500, description: 'Falownik Hybrydowy Deye + Magazyn energii Deye 15,36kWh + Zasilanie awaryjne (+1500zł)', detailsHtml: DESC_PV }
    ]
  },
  {
    id: 'septic',
    title: 'Szambo',
    iconName: 'Droplet',
    inputType: InputType.CHECKBOX,
    basePrice: 14500,
    detailsHtml: DESC_SEPTIC
  },
  {
    id: 'treatment',
    title: 'Przydomowa oczyszczalnia ścieków',
    iconName: 'Waves',
    inputType: InputType.CHECKBOX,
    basePrice: 17400,
    detailsHtml: DESC_TREATMENT
  },
  {
    id: 'terrace',
    title: 'Taras',
    iconName: 'LayoutDashboard',
    inputType: InputType.NUMBER,
    unitPrice: 990,
    unitLabel: 'm²',
    detailsHtml: DESC_TERRACE
  },
  {
    id: 'blinds',
    title: 'Rolety',
    iconName: 'Blinds',
    inputType: InputType.CHECKBOX,
    basePrice: 12500,
    detailsHtml: DESC_BLINDS
  }
];

const SKYLINE_HOUSE_CONFIG: ConfigCategory[] = [
  {
    id: 'base_stage',
    title: 'Stan Inwestycji',
    iconName: 'Home',
    inputType: InputType.RADIO,
    variants: [
      { id: 'raw_closed', label: 'Stan surowy zamknięty', price: 174900, description: 'Konstrukcja, ściany, dach, okna, drzwi zewnętrzne.', detailsHtml: DESC_RAW_CLOSED },
      { id: 'developer', label: 'Stan deweloperski', price: 239800, description: 'Instalacje, tynki, wylewki, ocieplenie.', detailsHtml: DESC_DEVELOPER }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundamenty',
    iconName: 'BrickWall',
    inputType: InputType.RADIO,
    variants: [
      { id: 'slab', label: 'Płyta fundamentowa (wykonanie)', price: 26250, detailsHtml: DESC_FOUNDATION_SLAB },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'formalities',
    title: 'Formalności urzędowe',
    iconName: 'FileText',
    inputType: InputType.RADIO,
    variants: [
      { id: 'service', label: 'Zlecam Wam (Pozwolenie/Zgłoszenie)', price: 9500, detailsHtml: DESC_FORMALITIES_SERVICE },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0, detailsHtml: DESC_FORMALITIES_SELF }
    ]
  },
  {
    id: 'heating',
    title: 'Ogrzewanie',
    iconName: 'Thermometer',
    inputType: InputType.SELECT, 
    variants: [
      { id: 'none', label: 'Brak ogrzewania', price: 0 },
      { id: 'floor_electric', label: 'Ogrzewanie podłogowe elektryczne', price: 28700, detailsHtml: DESC_HEATING_FLOOR_ELECTRIC },
      { id: 'floor_water_pump', label: 'Podłogowe wodne + Pompa ciepła + Wylewka', price: 58800, detailsHtml: DESC_HEATING_PUMP },
      { id: 'floor_water_only', label: 'Podłogowe wodne (samo rozłożenie) + Klient kupuje pompę', price: 23800, detailsHtml: DESC_HEATING_WATER_ONLY },
      { id: 'ac_heat', label: 'Klimatyzator z funkcją grzania', price: 7000, detailsHtml: DESC_HEATING_AC }
    ]
  },
  {
    id: 'ac',
    title: 'Klimatyzacja',
    iconName: 'Wind',
    inputType: InputType.RADIO,
    info: 'Jeśli chcesz inną ilość jednostek, wycena jest indywidualna.',
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'unit_1', label: '1 jednostka', price: 7000, detailsHtml: DESC_AC_SINGLE }
    ]
  },
  {
    id: 'pv',
    title: 'Fotowoltaika (Hybrydowa)',
    iconName: 'Sun',
    inputType: InputType.RADIO,
    info: PV_INFO_TEXT,
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'standard', label: '3.5kW + Magazyn 5.3kWh', price: 20000, description: 'Falownik Hybrydowy Deye + Magazyn energii Kon-Tec 5,3kWh', detailsHtml: DESC_PV },
      { id: 'backup', label: '3.5kW + Magazyn 5.3kWh + Zasilanie Awaryjne', price: 21500, description: 'Falownik Hybrydowy Deye + Magazyn energii Kon-Tec 5,3kWh + Zasilanie awaryjne (+1500zł)', detailsHtml: DESC_PV }
    ]
  },
  {
    id: 'septic',
    title: 'Szambo',
    iconName: 'Droplet',
    inputType: InputType.CHECKBOX,
    basePrice: 14500,
    detailsHtml: DESC_SEPTIC
  },
  {
    id: 'treatment',
    title: 'Przydomowa oczyszczalnia ścieków',
    iconName: 'Waves',
    inputType: InputType.CHECKBOX,
    basePrice: 17400,
    detailsHtml: DESC_TREATMENT
  },
  {
    id: 'terrace',
    title: 'Taras',
    iconName: 'LayoutDashboard',
    inputType: InputType.NUMBER,
    unitPrice: 990,
    unitLabel: 'm²',
    detailsHtml: DESC_TERRACE
  },
  {
    id: 'blinds',
    title: 'Rolety',
    iconName: 'Blinds',
    inputType: InputType.CHECKBOX,
    basePrice: 8000,
    detailsHtml: DESC_BLINDS
  }
];

const ZENITH_HOUSE_CONFIG: ConfigCategory[] = [
  {
    id: 'base_stage',
    title: 'Stan Inwestycji',
    iconName: 'Home',
    inputType: InputType.RADIO,
    variants: [
      { id: 'raw_closed', label: 'Stan surowy zamknięty', price: 184900, description: 'Konstrukcja, ściany, dach, okna, drzwi zewnętrzne.', detailsHtml: DESC_RAW_CLOSED },
      { id: 'developer', label: 'Stan deweloperski', price: 249800, description: 'Instalacje, tynki, wylewki, ocieplenie.', detailsHtml: DESC_DEVELOPER }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundamenty',
    iconName: 'BrickWall',
    inputType: InputType.RADIO,
    variants: [
      { id: 'slab', label: 'Płyta fundamentowa (wykonanie)', price: 26250, detailsHtml: DESC_FOUNDATION_SLAB },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'formalities',
    title: 'Formalności urzędowe',
    iconName: 'FileText',
    inputType: InputType.RADIO,
    variants: [
      { id: 'service', label: 'Zlecam Wam (Pozwolenie/Zgłoszenie)', price: 9500, detailsHtml: DESC_FORMALITIES_SERVICE },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0, detailsHtml: DESC_FORMALITIES_SELF }
    ]
  },
  {
    id: 'heating',
    title: 'Ogrzewanie',
    iconName: 'Thermometer',
    inputType: InputType.SELECT, 
    variants: [
      { id: 'none', label: 'Brak ogrzewania', price: 0 },
      { id: 'floor_electric', label: 'Ogrzewanie podłogowe elektryczne', price: 28700, detailsHtml: DESC_HEATING_FLOOR_ELECTRIC },
      { id: 'floor_water_pump', label: 'Podłogowe wodne + Pompa ciepła + Wylewka', price: 58800, detailsHtml: DESC_HEATING_PUMP },
      { id: 'floor_water_only', label: 'Podłogowe wodne (samo rozłożenie) + Klient kupuje pompę', price: 23800, detailsHtml: DESC_HEATING_WATER_ONLY },
      { id: 'ac_heat', label: 'Klimatyzator z funkcją grzania', price: 7000, detailsHtml: DESC_HEATING_AC }
    ]
  },
  {
    id: 'ac',
    title: 'Klimatyzacja',
    iconName: 'Wind',
    inputType: InputType.RADIO,
    info: 'Jeśli chcesz inną ilość jednostek, wycena jest indywidualna.',
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'unit_1', label: '1 jednostka', price: 7000, detailsHtml: DESC_AC_SINGLE }
    ]
  },
  {
    id: 'pv',
    title: 'Fotowoltaika (Hybrydowa)',
    iconName: 'Sun',
    inputType: InputType.RADIO,
    info: PV_INFO_TEXT,
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'standard', label: '3.5kW + Magazyn 5.3kWh', price: 20000, description: 'Falownik Hybrydowy Deye + Magazyn energii Kon-Tec 5,3kWh', detailsHtml: DESC_PV },
      { id: 'backup', label: '3.5kW + Magazyn 5.3kWh + Zasilanie Awaryjne', price: 21500, description: 'Falownik Hybrydowy Deye + Magazyn energii Kon-Tec 5,3kWh + Zasilanie awaryjne (+1500zł)', detailsHtml: DESC_PV }
    ]
  },
  {
    id: 'septic',
    title: 'Szambo',
    iconName: 'Droplet',
    inputType: InputType.CHECKBOX,
    basePrice: 14500,
    detailsHtml: DESC_SEPTIC
  },
  {
    id: 'treatment',
    title: 'Przydomowa oczyszczalnia ścieków',
    iconName: 'Waves',
    inputType: InputType.CHECKBOX,
    basePrice: 17400,
    detailsHtml: DESC_TREATMENT
  },
  {
    id: 'terrace',
    title: 'Taras',
    iconName: 'LayoutDashboard',
    inputType: InputType.NUMBER,
    unitPrice: 990,
    unitLabel: 'm²',
    detailsHtml: DESC_TERRACE
  },
  {
    id: 'blinds',
    title: 'Rolety',
    iconName: 'Blinds',
    inputType: InputType.CHECKBOX,
    basePrice: 9500,
    detailsHtml: DESC_BLINDS
  }
];

const PEAK_HOUSE_CONFIG: ConfigCategory[] = [
  {
    id: 'base_stage',
    title: 'Stan Inwestycji',
    iconName: 'Home',
    inputType: InputType.RADIO,
    variants: [
      { id: 'raw_closed', label: 'Stan surowy zamknięty', price: 259800, description: 'Konstrukcja, ściany, dach, okna, drzwi zewnętrzne.', detailsHtml: DESC_RAW_CLOSED },
      { id: 'developer', label: 'Stan deweloperski', price: 359700, description: 'Instalacje, tynki, wylewki, ocieplenie.', detailsHtml: DESC_DEVELOPER }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundamenty',
    iconName: 'BrickWall',
    inputType: InputType.RADIO,
    variants: [
      { id: 'slab', label: 'Płyta fundamentowa (wykonanie)', price: 50250, detailsHtml: DESC_FOUNDATION_SLAB },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'formalities',
    title: 'Formalności urzędowe',
    iconName: 'FileText',
    inputType: InputType.RADIO,
    variants: [
      { id: 'service', label: 'Zlecam Wam (Pozwolenie/Zgłoszenie)', price: 9500, detailsHtml: DESC_FORMALITIES_SERVICE },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0, detailsHtml: DESC_FORMALITIES_SELF }
    ]
  },
  {
    id: 'heating',
    title: 'Ogrzewanie',
    iconName: 'Thermometer',
    inputType: InputType.SELECT, 
    variants: [
      { id: 'none', label: 'Brak ogrzewania', price: 0 },
      { id: 'floor_electric', label: 'Ogrzewanie podłogowe elektryczne', price: 27700, detailsHtml: DESC_HEATING_FLOOR_ELECTRIC },
      { id: 'floor_water_pump', label: 'Podłogowe wodne + Pompa ciepła + Wylewka', price: 58800, detailsHtml: DESC_HEATING_PUMP },
      { id: 'floor_water_only', label: 'Podłogowe wodne (samo rozłożenie) + Klient kupuje pompę', price: 23800, detailsHtml: DESC_HEATING_WATER_ONLY },
      { id: 'ac_heat', label: 'Klimatyzator z funkcją grzania', price: 7000, detailsHtml: DESC_HEATING_AC }
    ]
  },
  {
    id: 'ac',
    title: 'Klimatyzacja',
    iconName: 'Wind',
    inputType: InputType.RADIO,
    info: 'Jeśli chcesz inną ilość jednostek, wycena jest indywidualna.',
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'unit_1', label: '1 jednostka', price: 7000, detailsHtml: DESC_AC_SINGLE }
    ]
  },
  {
    id: 'pv',
    title: 'Fotowoltaika (Hybrydowa)',
    iconName: 'Sun',
    inputType: InputType.RADIO,
    info: PV_INFO_TEXT,
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'standard', label: '8kW + Magazyn 10.24kWh', price: 20000, description: 'Falownik Hybrydowy Deye + Magazyn energii Deye 10,24kWh', detailsHtml: DESC_PV },
      { id: 'backup', label: '8kW + Magazyn 10.24kWh + Zasilanie Awaryjne', price: 21500, description: 'Falownik Hybrydowy Deye + Magazyn energii Deye 10,24kWh + Zasilanie awaryjne (+1500zł)', detailsHtml: DESC_PV }
    ]
  },
  {
    id: 'septic',
    title: 'Szambo',
    iconName: 'Droplet',
    inputType: InputType.CHECKBOX,
    basePrice: 14500,
    detailsHtml: DESC_SEPTIC
  },
  {
    id: 'treatment',
    title: 'Przydomowa oczyszczalnia ścieków',
    iconName: 'Waves',
    inputType: InputType.CHECKBOX,
    basePrice: 17400,
    detailsHtml: DESC_TREATMENT
  },
  {
    id: 'terrace',
    title: 'Taras',
    iconName: 'LayoutDashboard',
    inputType: InputType.NUMBER,
    unitPrice: 990,
    unitLabel: 'm²',
    detailsHtml: DESC_TERRACE
  },
  {
    id: 'blinds',
    title: 'Rolety',
    iconName: 'Blinds',
    inputType: InputType.CHECKBOX,
    basePrice: 10500,
    detailsHtml: DESC_BLINDS
  }
];

// Fallback config for other houses (can be replaced later)
const DEFAULT_CONFIG = NEST_HOUSE_CONFIG.map(c => ({...c}));

export const getHouseConfig = (houseId: string): ConfigCategory[] => {
  if (houseId === 'nest_house') {
    return NEST_HOUSE_CONFIG;
  }
  if (houseId === 'haven_house') {
    return HAVEN_HOUSE_CONFIG;
  }
  if (houseId === 'balance_house') {
    return BALANCE_HOUSE_CONFIG;
  }
  if (houseId === 'comfort_house') {
    return COMFORT_HOUSE_CONFIG;
  }
  if (houseId === 'vista_house') {
    return VISTA_HOUSE_CONFIG;
  }
  if (houseId === 'peak_house') {
    return PEAK_HOUSE_CONFIG;
  }
  if (houseId === 'skyline_house') {
    return SKYLINE_HOUSE_CONFIG;
  }
  if (houseId === 'zenith_house') {
    return ZENITH_HOUSE_CONFIG;
  }
  // For now, return the same structure for others, but marked as placeholders if needed
  // Or simply return default to avoid crashing
  return DEFAULT_CONFIG;
};

// Helper to map string name to component
export const getIcon = (name: string) => {
  switch (name) {
    case 'Home': return <Home className="w-6 h-6" />;
    case 'BrickWall': return <BrickWall className="w-6 h-6" />;
    case 'FileText': return <FileText className="w-6 h-6" />;
    case 'Thermometer': return <Thermometer className="w-6 h-6" />;
    case 'Wind': return <Wind className="w-6 h-6" />;
    case 'Sun': return <Sun className="w-6 h-6" />;
    case 'Droplet': return <Droplet className="w-6 h-6" />;
    case 'Waves': return <Waves className="w-6 h-6" />;
    case 'LayoutDashboard': return <LayoutDashboard className="w-6 h-6" />;
    case 'Blinds': return <Blinds className="w-6 h-6" />;
    default: return <Home className="w-6 h-6" />;
  }
};