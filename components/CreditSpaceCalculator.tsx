import React, { useEffect, useState } from 'react';
import { Landmark, X } from 'lucide-react';

// Dane partnera Credit Space (i tak są widoczne w adresie iframe na stronie).
const CREDITSPACE_LOGIN = 'starterhome';
const CREDITSPACE_PASSWORD = '9EZ3zEsQ';

interface Props {
  price: number;   // aktualna cena całkowita z konfiguratora (zł brutto)
  houseId: string; // unikalny identyfikator wtyczki
  open: boolean;   // czy panel nad dolnym paskiem jest rozwinięty
  onClose: () => void;
}

const CreditSpaceCalculator: React.FC<Props> = ({ price, houseId, open, onClose }) => {
  // Opóźnienie, żeby iframe nie przeładowywał się przy każdym kliknięciu opcji
  const [debouncedPrice, setDebouncedPrice] = useState(price);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedPrice(price), 600);
    return () => clearTimeout(t);
  }, [price]);

  const configured = !CREDITSPACE_LOGIN.startsWith('TUTAJ_') && !CREDITSPACE_PASSWORD.startsWith('TUTAJ_');
  if (!open || !configured || debouncedPrice <= 0) return null;

  const params = new URLSearchParams({
    u: CREDITSPACE_LOGIN,
    p: CREDITSPACE_PASSWORD,
    c: String(Math.min(Math.round(debouncedPrice), 5000000)),
    co: 'house',
    id: houseId,
  });

  return (
    <section className="bg-white border-b border-gray-200 max-h-[70vh] overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#f7faf3] px-4 sm:px-6 lg:px-8 py-4 border-b border-[#e2e8da] flex items-center gap-3">
          <div className="bg-white p-2 border border-[#e2e8da]">
            <Landmark className="w-5 h-5 text-[#729c36]" />
          </div>
          <div className="flex-1">
            <h2 className="font-bold uppercase tracking-wide text-sm text-gray-900">Sprawdź ratę kredytu</h2>
            <p className="text-xs text-gray-500">Aktualne oferty banków dla Twojej konfiguracji</p>
          </div>
          <button onClick={onClose} aria-label="Zamknij" className="p-2 text-gray-400 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 md:p-6">
          <iframe
            title="Kalkulator kredytu Credit Space"
            src={`https://www.creditspace.pl/plugin/plugin.php?${params.toString()}`}
            style={{ border: 0, width: '100%', height: 420 }}
          />
        </div>
      </div>
    </section>
  );
};

export default CreditSpaceCalculator;
