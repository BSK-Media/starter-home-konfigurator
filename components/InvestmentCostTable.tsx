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
              <div className="bg-[#111827] text-white px-5 py-4 text-sm font-semibold text-center leading-tight">
                Stan Surowy
                <div className="text-xs font-medium opacity-80 mt-0.5">
                  Zamknięty
                </div>
              </div>
              <div className="bg-[#6e8809] text-white px-5 py-4 text-sm font-semibold text-center">
                Stan Deweloperski
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {[
                { label: "Konstrukcja C24", ssz: "check", dev: "check" },
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
                  label:
                    "Elewacja zewnętrzna na gotowo (tynk lub deska świerkowa)",
                  ssz: "check",
                  dev: "check",
                },
                { label: "Ocieplenie wełna 25cm", ssz: "x", dev: "check" },
                { label: "Instalacje (Wod-Kan, Prąd)", ssz: "x", dev: "check" },
                {
                  label:
                    "Elewacja wewnętrzna (ściany obłożone płytami karton-gips, gotowe do szpachlowania i malowania)",
                  ssz: "x",
                  dev: "check",
                },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 items-stretch bg-white">
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
            <div className="bg-[#6e8809] text-white px-5 py-4">
              <div className="text-xl font-bold tracking-tight">
                Koszty związane z budową
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {[
                {
                  type: "standard",
                  title: "Zlecenie mapy do celów projektowych",
                  subtitle: "(lokalny geodeta)",
                  price: "800 – 1200 zł",
                },
                {
                  type: "standard",
                  title: "Wytyczenie budynku na działce",
                  subtitle: "(lokalny geodeta)",
                  price: "1000 – 2000 zł",
                },
                {
                  type: "standard",
                  title: "Zatrudnienie kierownika budowy",
                  subtitle: "(najlepiej lokalnego)",
                  price: "3000 – 5000 zł",
                },
                {
                  type: "mixed",
                  titleBold: "Przyłącza i Media",
                  subtitle: "Doprowadzenie prądu i wody do stawianego budynku",
                  // na screenie: "nasz koszt to" szare, a "150zł/mb" czarne i bold
                  pricePrefixMuted: "nasz koszt to",
                  priceBold: "150zł/mb",
                },
                {
                  type: "mixed",
                  titleBold: "Ogrzewanie",
                  subtitle: "Wybór systemu ogrzewania",
                  priceMuted: "sprawdź nasz konfigurator",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={
                    "px-6 py-6 flex items-start justify-between gap-6 " +
                    (idx % 2 === 0 ? "bg-[#f7faf3]" : "bg-white")
                  }
                >
                  <div className="min-w-0">
                    {/* TITLE (mocniejszy bold jak na screenie) */}
                    {item.type === "standard" && (
                      <>
                        <div className="text-base font-bold text-gray-900 leading-snug">
                          {item.title}
                        </div>
                        <div className="text-[13px] text-gray-500 mt-0.5">
                          {item.subtitle}
                        </div>
                      </>
                    )}

                    {item.type === "mixed" && (
                      <>
                        <div className="text-base leading-snug text-gray-900">
                          <span className="font-bold">{item.titleBold}</span>
                          <span className="font-normal">{" - "}</span>
                          <span className="font-normal">{item.subtitle}</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* PRICE */}
                  <div className="shrink-0 text-base whitespace-nowrap">
                    {item.type === "standard" && (
                      <span className="font-bold text-gray-900">
                        {item.price}
                      </span>
                    )}

                    {item.type === "mixed" && item.pricePrefixMuted && item.priceBold && (
                      <span className="text-gray-400">
                        {item.pricePrefixMuted}{" "}
                        <span className="font-bold text-gray-900">
                          {item.priceBold}
                        </span>
                      </span>
                    )}

                    {item.type === "mixed" && item.priceMuted && (
                      <span className="text-gray-400 font-medium">
                        {item.priceMuted}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-6 bg-white">
              <div className="bg-[#f7faf3] border border-[#e2e8da] px-5 py-4 text-[15px] text-gray-900">
                <span className="font-bold">To należy do obowiązków</span>{" "}
                <span className="font-normal">inwestora</span>,{" "}
                <span className="font-normal">lecz możemy zrobić</span>{" "}
                <span className="font-bold">to za Ciebie</span>
              </div>

              <div className="mt-6">
                <div className="text-2xl font-bold text-gray-900">
                  Zero ukrytych kosztów:
                </div>
                <div className="text-gray-700 mt-2 leading-relaxed">
                  Pokazujemy realne wydatki, nawet jeśli nie płacisz nam.
                  <br />
                  Chcemy, abyś wiedział, na co przygotować budżet.
                </div>
              </div>
            </div>
          </div>
          {/* /PRAWA TABELA */}
        </div>
      </div>
    </section>
  );
}
