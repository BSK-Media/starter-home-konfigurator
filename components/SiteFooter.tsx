import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

type LinkItem = { label: string; href: string };

const SiteFooter: React.FC = () => {
  const sitemap: LinkItem[] = [
    { label: 'O nas', href: 'https://starterhome.pl/o-nas/' },
    { label: 'Oferta', href: 'https://starterhome.pl/oferta/' },
    { label: 'Realizacje', href: 'https://starterhome.pl/realizacje/' },
    { label: 'Finansowanie', href: 'https://starterhome.pl/finansowanie/' },
    { label: 'Kontakt', href: 'https://starterhome.pl/kontakt/' },
    { label: 'Polityka prywatności', href: 'https://starterhome.pl/polityka-prywatnosci/' },
  ];

  const models: LinkItem[] = [
    // Links intentionally removed for the configurator app – this section is informational only.
    { label: 'Nest House', href: '' },
    { label: 'Haven House', href: '' },
    { label: 'Peak House', href: '' },
    { label: 'Skyline House', href: '' },
    { label: 'Vista House', href: '' },
    { label: 'Zenith House', href: '' },
    { label: 'Balance House', href: '' },
    { label: 'Comfort House', href: '' },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand / intro */}
          <div className="md:col-span-1">
            <img
              src="https://todybnsadf.cfolks.pl/logo-sh.png"
              alt="Starter Home"
              className="h-9 w-auto object-contain mb-5"
            />
            <p className="text-sm text-gray-600 leading-relaxed">
              Starter Home™ to domy modułowe w standardzie premium – szybka realizacja, wysoka izolacja i pełne wsparcie
              od działki po klucze.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#729c36] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-500" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#729c36] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-500" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#729c36] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-gray-500" />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-5">Mapa strony</h3>
            <ul className="space-y-3">
              {sitemap.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-gray-600 hover:text-[#729c36] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Models */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-5">Dostępne modele</h3>
            <ul className="space-y-3">
              {models.map((l) => (
                <li key={l.label}>
                  <span className="text-sm text-gray-600">{l.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-5">Kontakt</h3>
            <div className="space-y-4">
              <a href="tel:733345573" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#729c36] transition-colors">
                <span className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#729c36]" />
                </span>
                <span>+48 733 345 573</span>
              </a>
              <a href="mailto:kontakt@starterhome.pl" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#729c36] transition-colors">
                <span className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#729c36]" />
                </span>
                <span>kontakt@starterhome.pl</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="w-9 h-9 mt-0.5 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#729c36]" />
                </span>
                <span>Cała Polska</span>
              </div>

              <a
                href="https://starterhome.pl/kontakt/"
                className="inline-flex mt-2 bg-white border border-gray-200 hover:border-[#729c36] text-[#729c36] font-bold text-xs py-3 px-5 rounded-full transition-all duration-300 uppercase tracking-widest"
              >
                Zadaj pytanie
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">© {new Date().getFullYear()} Starter Home™</p>
          <p className="text-xs text-gray-400">Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
