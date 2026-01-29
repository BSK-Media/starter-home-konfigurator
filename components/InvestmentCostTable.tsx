import React from "react";

type CheckState = "check" | "x" | "blank";

const IconCheck: React.FC = () => (
  <span
    aria-label="W cenie"
    className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#eef4e6] text-[#6e8809] text-sm font-bold"
  >
    ✓
  </span>
);

const IconX: React.FC = () => (
  <span
    aria-label="Brak"
    className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f2f2f2] text-gray-400 text-sm font-bold"
  >
    ×
  </span>
);

function CellState({ state }: { state: CheckState }) {
  if (state === "check") return <IconCheck />;
  if (state === "x") return <IconX />;
  return <span className="inline-block h-6 w-6" aria-hidden="true" />;
}

export default function InvestmentCostTable() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEWA TABELA */}
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <div className="grid grid-cols-3">
              <div className="bg-[#0f172a] text-white px-5 py-4 text-sm font-semibold">
                Element
              </div>
              <div className="bg-[#111827] text-white px-5 py-4 text-sm font-semibold text-center">
                Stan Surowy Zamknięty
              </div>
              <div className="bg-[#6e8809] text-white px-5 py-4 text-sm font-semibold text-center">
                Stan Deweloperski
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {[
                {
                  label: "Konstrukcja C24",
                  ssz: "check",
                  dev: "check",
                },
                {
                  label: "Dach z pełnym deskowaniem + blacha na rąbek",
                  ssz: "check",
                  dev: "check",
                },
                {
                  label: "Stolarka okienna (pakiet 3-szybowy)",
                  ssz: "check",
                  dev: "check",
                },
                {
                  label: "Elewacja zewnętrzna na gotowo (tynk lub deska świerkowa)",
                  ssz: "check",
                  dev: "check",
                },
                {
                  label: "Ocieplenie wełna 25cm",
                  ssz: "x",
                  dev: "check",
                },
                {
                  label: "Instalacje (Wod-Kan, Prąd)",
                  ssz: "x",
                  dev: "check",
                },
                {
                  label:
                    "Elewacja wewnętrzna (ściany obłożone płytami karton-gips, gotowe do szpachlowania i malowania)",
                  ssz: "x",
                  dev: "check",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 items-stretch bg-white"
                >
                  <div className="px-5 py-4 text-[13px] leading-snug text-gray-700">
                    {row.label}
                  </div>
                  <div className="px-5 py-4 flex items-center justify-center">
                    <CellState state={row.ssz as CheckState} />
                  </div>
                  <div className="px-5 py-4 flex items-center justify-center bg-[#fafbf7]">
                    <CellState state={row.dev as CheckState} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PRAWA TABELA */}
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <div className="bg-[#6e8809] text-white px-5 py-4 text-sm font-semibold">
              Koszty związane z budową
            </div>

            <div className="divide-y divide-gray-100">
              {[
                {
                  title: "Zlecenie mapy do celów projektowych",
                  subtitle: "(lokalny geodeta)",
                  price: "800 – 1200 zł",
                },
                {
                  title: "Wytyczenie budynku na działce",
                  subtitle: "(lokalny geodeta)",
                  price: "1000 – 2000 zł",
                },
                {
                  title: "Zatrudnienie kierownika budowy",
                  subtitle: "(najlepiej lokalnego)",
                  price: "3000 – 5000 zł",
                },
                {
                  title: "Przyłącza i Media",
                  subtitle: "Doprowadzenie prądu i wody do stawianego budynku",
                  price: "nasz koszt to 150zł/mb",
                  priceMuted: true,
                },
                {
                  title: "Ogrzewanie",
                  subtitle: "Wybór systemu ogrzewania",
                  price: "sprawdź nasz konfigurator",
                  priceMuted: true,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="px-5 py-4 flex items-start justify-between gap-6"
                >
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 text-[13px]">
                      {item.title}
                    </div>
                    <div className="text-[12px] text-gray-500">
                      {item.subtitle}
                    </div>
                  </div>
                  <div
                    className={
                      "shrink-0 text-[12px] font-semibold " +
                      (item.priceMuted ? "text-gray-400" : "text-gray-900")
                    }
                  >
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-5 py-5 bg-[#fafbf7] border-t border-gray-100">
              <div className="text-[13px] font-semibold text-gray-900">
                To należy do obowiązków inwestora, lecz możemy zrobić to za Ciebie
              </div>
              <div className="mt-3 text-[13px] font-semibold text-gray-900">
                Zero ukrytych kosztów:
              </div>
              <div className="text-[13px] text-gray-700 leading-relaxed">
                Pokazujemy realne wydatki, nawet jeśli nie płacisz nam.
                <br />
                Chcemy, abyś wiedział, na co przygotować budżet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
