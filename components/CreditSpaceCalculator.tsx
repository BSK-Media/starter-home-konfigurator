import React, { useEffect, useState } from 'react';
import { Landmark } from 'lucide-react';

// Dane partnera Credit Space (i tak są widoczne w adresie iframe na stronie).
const CREDITSPACE_LOGIN = 'starterhome';
const CREDITSPACE_PASSWORD = '9EZ3zEsQ';

interface Props {
  price: number;   // aktualna cena całkowita z konfiguratora (zł brutto)
  houseId: string; // unikalny identyfikator wtyczki
}

const CreditSpaceCalculator: React.FC<Props> = ({ price, houseId }) => {
  // Opóźnienie, żeby iframe nie przeładowywał się przy każdym kliknięciu opcji
  const [debouncedPrice, setDebouncedPrice] = useState(price);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedPrice(price), 600);
    return () => clearTimeout(t);
  }, [price]);

  const configured = !CREDITSPACE_LOGIN.startsWith('TUTAJ_') && !CREDITSPACE_PASSWORD.startsWith('TUTAJ_');
  if (!configured || debouncedPrice <= 0) return null;

  const params = new URLSearchParams({
    u: CREDITSPACE_LOGIN,
    p: CREDITSPACE_PASSWORD,
    c: String(Math.min(Math.round(debouncedPrice), 5000000)),
    co: 'house',
    id: houseId,
  });

  return (
    <section id="kredyt" className="scroll-mt-28 bg-white border-t border-gray-200">
      <div className="bg-[#f7faf3] px-6 md:px-8 py-5 border-b border-[#e2e8da] flex items-center gap-3">
        <div className="bg-white p-2 border border-[#e2e8da]">
          <Landmark className="w-5 h-5 text-[#729c36]" />
        </div>
        <div>
          <h2 className="font-bold uppercase tracking-wide text-sm text-gray-900">Sprawdź ratę kredytu</h2>
          <p className="text-xs text-gray-500">Aktualne oferty banków dla Twojej konfiguracji</p>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <iframe
          title="Kalkulator kredytu Credit Space"
          src={`https://www.creditspace.pl/plugin/plugin.php?${params.toString()}`}
          loading="lazy"
          style={{ border: 0, width: '100%', height: 420 }}
        />
      </div>
    </section>
  );
};

export default CreditSpaceCalculator;
