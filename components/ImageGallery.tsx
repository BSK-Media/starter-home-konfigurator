import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type Props = {
  images: string[];
  alt: string;
  className?: string;
};

export default function ImageGallery({ images, alt, className = '' }: Props) {
  const safeImages = useMemo(() => (Array.isArray(images) ? images.filter(Boolean) : []), [images]);
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    setActive(0);
  }, [safeImages.join('|')]);

  const canNavigate = safeImages.length > 1;
  const prev = () => setActive((i) => (i - 1 + safeImages.length) % safeImages.length);
  const next = () => setActive((i) => (i + 1) % safeImages.length);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false);
      else if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + safeImages.length) % safeImages.length);
      else if (e.key === 'ArrowRight') setActive((i) => (i + 1) % safeImages.length);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, safeImages.length]);

  if (!safeImages.length) {
    return (
      <div className={'w-full h-full bg-gray-100 ' + className}>
        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
          Brak zdjęć
        </div>
      </div>
    );
  }

  return (
    <div className={'w-full h-full flex flex-col ' + className}>
      <div className="relative flex-1 min-h-[260px] bg-gray-100 overflow-hidden group">
        <img
          src={safeImages[active]}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
          loading="eager"
          onClick={() => setLightbox(true)}
        />

        {canNavigate && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Poprzednie zdjęcie"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur border border-white/60 shadow-md flex items-center justify-center text-gray-700 hover:text-[#729c36] hover:bg-white transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Następne zdjęcie"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur border border-white/60 shadow-md flex items-center justify-center text-gray-700 hover:text-[#729c36] hover:bg-white transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {safeImages.length > 1 && (
        <div className="bg-white border-t border-gray-100 p-3">
          <div className="flex gap-3 overflow-x-auto pb-1 custom-scrollbar">
            {safeImages.map((src, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={src + idx}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={
                    'relative shrink-0 w-20 h-16 rounded-md overflow-hidden border transition ' +
                    (isActive
                      ? 'border-[#729c36] ring-2 ring-[#729c36]/30'
                      : 'border-gray-200 hover:border-gray-300')
                  }
                  aria-label={'Miniatura ' + (idx + 1)}
                >
                  <img src={src} alt={alt + ' - miniatura ' + (idx + 1)} className="w-full h-full object-cover" loading="lazy" />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {lightbox &&
        createPortal(
          <div
            className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center"
            onClick={() => setLightbox(false)}
            onTouchStart={(e) => {
              touchX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchX.current === null || !canNavigate) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              touchX.current = null;
              if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
            }}
            role="dialog"
            aria-modal="true"
          >
            <img
              src={safeImages[active]}
              alt={alt}
              className="max-w-[96vw] max-h-[90vh] object-contain select-none"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              onClick={() => setLightbox(false)}
              aria-label="Zamknij"
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center text-gray-800 hover:text-[#729c36]"
            >
              <X className="w-6 h-6" />
            </button>
            {canNavigate && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label="Poprzednie zdjęcie"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center text-gray-800 hover:text-[#729c36]"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label="Następne zdjęcie"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center text-gray-800 hover:text-[#729c36]"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
                  {active + 1} / {safeImages.length}
                </div>
              </>
            )}
          </div>,
          document.body
        )}
    </div>
  );
}
