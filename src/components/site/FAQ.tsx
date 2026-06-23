import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ as DATA } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./Decor";

export function FAQ() {
  return (
    <section id="faq" className="relative bg-gradient-to-b from-cream to-lilac/40 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title={<>Resolvemos tus <span className="text-grape">dudas</span></>}
          />
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {DATA.map((f, i) => (
              <AccordionItem
                key={i}
                value={`f-${i}`}
                className="overflow-hidden rounded-2xl border-0 bg-white px-5 soft-shadow"
              >
                <AccordionTrigger className="text-left text-base font-bold text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-ink/75">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
