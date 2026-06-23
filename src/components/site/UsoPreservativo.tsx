import { PRESERVATIVO_PASOS } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./Decor";

export function UsoPreservativo() {
  return (
    <div id="uso" className="mt-20">
      <Reveal>
        <SectionTitle
          eyebrow="Uso correcto del preservativo"
          title={<>7 pasos para usarlo <span className="text-rose">de forma segura</span></>}
          subtitle="Ilustraciones educativas, sin contenido explícito, pensadas para una exposición universitaria."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PRESERVATIVO_PASOS.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.04}>
            <article className="relative h-full rounded-3xl bg-gradient-to-br from-white to-rose-soft/40 p-5 soft-shadow">
              <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-full bg-white text-base font-black text-rose soft-shadow">
                {p.n}
              </div>
              <h3 className="text-base font-bold text-ink">{p.title}</h3>
              <p className="mt-1 text-sm text-ink/70">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
