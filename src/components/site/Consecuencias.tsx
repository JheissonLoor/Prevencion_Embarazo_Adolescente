import * as Icons from "lucide-react";
import { CONSECUENCIAS } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./Decor";

const TONES: Record<string, string> = {
  rose: "from-rose-soft to-white text-rose",
  grape: "from-lilac to-white text-grape",
  teal: "from-teal/20 to-white text-teal",
};

export function Consecuencias() {
  return (
    <section id="consecuencias" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Consecuencias"
            title={<>Lo que puede cambiar <span className="text-teal">sin información ni apoyo</span></>}
            subtitle="No buscamos asustar ni señalar: queremos que entiendas el panorama para decidir con responsabilidad y empatía."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {CONSECUENCIAS.map((c, i) => {
            const Icon = (Icons[c.icon as keyof typeof Icons] ?? Icons.Heart) as React.ComponentType<{ className?: string }>;
            return (
              <Reveal key={c.title} delay={i * 0.06}>
                <article
                  className={`relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br ${TONES[c.tone]} p-7 soft-shadow md:p-9 ${
                    i % 2 === 1 ? "md:translate-y-8" : ""
                  }`}
                >
                  <div className="mb-5 inline-grid h-14 w-14 place-items-center rounded-2xl bg-white/80">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink">{c.title}</h3>
                  <p className="mt-3 max-w-md text-ink/75">{c.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
