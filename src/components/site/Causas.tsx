import * as Icons from "lucide-react";
import { CAUSAS } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./Decor";

export function Causas() {
  return (
    <section id="causas" className="relative bg-gradient-to-b from-cream to-rose-soft/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Causas"
            title={<>Principales <span className="text-grape">factores de riesgo</span></>}
            subtitle="Identificarlos a tiempo ayuda a transformarlos en oportunidades de prevención."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAUSAS.map((c, i) => {
            const Icon = (Icons[c.icon as keyof typeof Icons] ?? Icons.Heart) as React.ComponentType<{ className?: string }>;
            return (
              <Reveal key={c.title} delay={i * 0.05}>
                <article className="group h-full rounded-3xl bg-white p-6 soft-shadow transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(118,84,196,0.35)]">
                  <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-rose-soft to-lilac text-grape transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{c.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
