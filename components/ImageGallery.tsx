import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  images: string[];
  alt: string;
  className?: string;
};

export default function ImageGallery({ images, alt, className = '' }: Props) {
  const safeImages = useMemo(() => (Array.isArray(images) ? images.filter(Boolean) : []), [images]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [safeImages.join('|')]);

  const canNavigate = safeImages.length > 1;
  const prev = () => setActive((i) => (i - 1 + safeImages.length) % safeImages.length);
  const next = () => setActive((i) => (i + 1) % safeImages.length);

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
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="eager"
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
    </div>
  );
}
