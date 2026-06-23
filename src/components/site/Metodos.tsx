import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, ShieldCheck } from "lucide-react";
import { METODOS } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./Decor";
import { UsoPreservativo } from "./UsoPreservativo";

type Key = keyof typeof METODOS;

export function Metodos() {
  const [tab, setTab] = useState<Key>("barrera");
  const data = METODOS[tab];

  return (
    <section id="metodos" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Métodos anticonceptivos"
            title={<>Conoce tus <span className="text-grape">opciones</span></>}
            subtitle="Ningún método es 100 % efectivo. Acude siempre a un profesional de salud para elegir el más adecuado para ti."
          />
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Tipos de métodos">
            {(Object.keys(METODOS) as Key[]).map((k) => (
              <button
                key={k}
                role="tab"
                aria-selected={tab === k}
                onClick={() => setTab(k)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  tab === k
                    ? "bg-gradient-to-r from-rose to-grape text-white chip-shadow"
                    : "bg-white text-ink/70 soft-shadow hover:text-grape"
                }`}
              >
                {METODOS[k].label}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-10 grid gap-5 md:grid-cols-2"
          >
            {data.items.map((m) => (
              <article key={m.name} className="rounded-3xl bg-white p-6 soft-shadow">
                <header className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-ink">{m.name}</h3>
                  <span
                    className={`inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                      m.its ? "bg-teal/15 text-teal" : "bg-rose-soft text-rose"
                    }`}
                  >
                    {m.its ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                    {m.its ? "Reduce ITS" : "No previene ITS"}
                  </span>
                </header>
                <p className="mt-3 text-sm text-ink/75">{m.desc}</p>
                <p className="mt-2 text-sm text-ink/60"><strong className="text-ink/80">Cómo funciona:</strong> {m.how}</p>
                <p className="mt-3 text-xs italic text-grape">{m.note}</p>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        <Reveal>
          <div className="mt-10 flex items-start gap-4 rounded-3xl bg-gradient-to-r from-rose-soft to-lilac p-6 soft-shadow">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-grape">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <p className="text-sm text-ink/80 sm:text-base">
              <strong>El preservativo es el único método</strong> que también ayuda a reducir el riesgo
              de infecciones de transmisión sexual (ITS).
            </p>
          </div>
        </Reveal>

        <UsoPreservativo />
      </div>
    </section>
  );
}
