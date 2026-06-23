import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MITOS } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./Decor";

export function Mitos() {
  return (
    <section id="mitos" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Mitos y verdades"
            title={<>Separemos lo <span className="text-rose">cierto</span> de lo <span className="text-grape">falso</span></>}
            subtitle="Toca cada tarjeta para ver la explicación basada en información oficial."
          />
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {MITOS.map((m, i) => (
              <AccordionItem
                key={i}
                value={`m-${i}`}
                className="overflow-hidden rounded-2xl border-0 bg-white px-5 soft-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider ${
                        m.tipo === "MITO" ? "bg-rose text-white" : "bg-teal text-white"
                      }`}
                    >
                      {m.tipo}
                    </span>
                    <span className="text-base font-bold text-ink sm:text-lg">{m.titulo}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-ink/75">{m.explica}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
