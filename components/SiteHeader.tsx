import React, { useMemo, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

type NavItem = { label: string; href: string; isExternal?: boolean; onClick?: () => void };

type Props = {
  /** If provided, clicking "Dostępne modele" will call this and stay in-app (SPA). */
  onShowModels?: () => void;
};

function computeAppBasePath(): string {
  if (typeof window === 'undefined') return '/';
  const p = window.location.pathname || '/';
  // If app is deployed under /konfigurator (reverse proxy), keep that as base.
  if (p === '/konfigurator' || p.startsWith('/konfigurator/')) return '/konfigurator';
  return '/';
}

const SiteHeader: React.FC<Props> = ({ onShowModels }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const appBase = useMemo(() => computeAppBasePath(), []);
  const modelsHref = appBase;

  const nav: NavItem[] = [
    { label: 'Strona główna', href: 'https://starterhome.pl/', isExternal: true },
    {
      label: 'Dostępne modele',
      href: modelsHref,
      onClick: onShowModels ? () => onShowModels() : undefined,
    },
    { label: 'Technologia', href: 'https://starterhome.pl/technologia/', isExternal: true },
    { label: 'O nas', href: 'https://starterhome.pl/o-nas/', isExternal: true },
    { label: 'Nasze realizacje', href: 'https://starterhome.pl/realizacje/', isExternal: true },
    { label: 'Finansowanie', href: 'https://starterhome.pl/finansowanie/', isExternal: true },
    { label: 'Kontakt', href: 'https://starterhome.pl/kontakt/', isExternal: true },
  ];

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    if (item.onClick) {
      e.preventDefault();
      item.onClick();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileOpen(false);
    } else if (item.isExternal) {
      setMobileOpen(false);
    } else {
      setMobileOpen(false);
    }
  };

  return (
    <header className="bg-white/90 backdrop-blur-md border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: logo */}
        <a href="https://starterhome.pl/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img
            src="https://todybnsadf.cfolks.pl/logo-sh.png"
            alt="Starter Home"
            className="h-9 md:h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className="text-xs font-bold uppercase tracking-widest text-gray-700 hover:text-[#729c36] transition-colors"
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: phone + CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:733345573"
            className="hidden md:flex items-center gap-2 text-gray-700 hover:text-[#729c36] transition-colors font-semibold bg-white px-4 py-2 rounded-full border border-gray-200 hover:border-[#729c36] shadow-sm group"
          >
            <Phone className="w-4 h-4 text-[#729c36] group-hover:scale-110 transition-transform" />
            <span>733 345 573</span>
          </a>

          <a
            href={modelsHref}
            onClick={(e) => {
              if (onShowModels) {
                e.preventDefault();
                onShowModels();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="hidden sm:inline-flex bg-[#729c36] hover:bg-[#5d822b] text-white font-bold text-xs md:text-sm py-3 px-5 rounded-full transition-all duration-300 shadow-lg shadow-green-600/20 hover:shadow-green-600/35 uppercase tracking-widest"
          >
            Konfigurator online
          </a>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 bg-white hover:border-[#729c36] transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4">
            <a
              href="tel:733345573"
              className="flex items-center gap-2 text-gray-700 hover:text-[#729c36] transition-colors font-semibold"
            >
              <Phone className="w-4 h-4 text-[#729c36]" />
              <span>733 345 573</span>
            </a>

            <div className="h-px bg-gray-100" />

            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-xs font-bold uppercase tracking-widest text-gray-800 hover:text-[#729c36] transition-colors"
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
              >
                {item.label}
              </a>
            ))}

            <a
              href={modelsHref}
              onClick={(e) => {
                if (onShowModels) {
                  e.preventDefault();
                  onShowModels();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setMobileOpen(false);
                }
              }}
              className="mt-2 inline-flex justify-center bg-[#729c36] hover:bg-[#5d822b] text-white font-bold text-xs py-3 px-5 rounded-full transition-all duration-300 uppercase tracking-widest"
            >
              Konfigurator online
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
