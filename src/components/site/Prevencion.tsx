import { PREVENCION_PASOS } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./Decor";

export function Prevencion() {
  return (
    <section id="prevencion" className="relative overflow-hidden bg-gradient-to-b from-lilac/40 via-white to-rose-soft/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Prevención"
            title={<>7 acciones para <span className="text-rose">cuidarte</span></>}
            subtitle="Un recorrido para construir decisiones informadas, con apoyo y sin presiones."
          />
        </Reveal>

        <div className="mt-14">
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-12 h-1 rounded-full bg-gradient-to-r from-rose via-grape to-teal opacity-30" />
              <ol className="relative grid grid-cols-7 gap-4">
                {PREVENCION_PASOS.map((p, i) => (
                  <Reveal key={p.n} delay={i * 0.05}>
                    <li className="relative pt-6 text-center">
                      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-rose to-grape text-lg font-black text-white chip-shadow">
                        {p.n}
                      </div>
                      <h3 className="mt-4 text-sm font-bold text-ink">{p.title}</h3>
                      <p className="mt-1 text-xs text-ink/65">{p.text}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>

          <ol className="relative space-y-4 lg:hidden">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-rose via-grape to-teal opacity-30" />
            {PREVENCION_PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.04}>
                <li className="relative flex gap-4 rounded-2xl bg-white p-4 soft-shadow">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-rose to-grape text-lg font-black text-white">
                    {p.n}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-ink">{p.title}</h3>
                    <p className="mt-1 text-sm text-ink/70">{p.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
