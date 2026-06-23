import { QUE_ES_CARDS } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionTitle, HeartIcon } from "./Decor";
import teenImg from "@/assets/teen-thinkinh.png";

export function QueEs() {
  return (
    <section id="que-es" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="¿Qué es?"
            title={<>Embarazo adolescente, <span className="text-rose">en palabras claras</span></>}
            subtitle="Es la gestación que ocurre durante la adolescencia (10–19 años, según la OMS). Hablar del tema sin tabúes es el primer paso para prevenirlo."
          />
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              <div className="absolute inset-0 -rotate-3 rounded-[2.5rem] bg-lilac/70" />
              <div className="absolute inset-0 rotate-2 rounded-[2.5rem] bg-rose-soft/80" />
              <div className="relative h-full rounded-[2.5rem] bg-white p-4 soft-shadow">
                <img
                  src={teenImg}
                  alt="Ilustración de una adolescente reflexionando"
                  loading="lazy"
                  width={768}
                  height={960}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {QUE_ES_CARDS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <article className="group rounded-3xl bg-white p-5 soft-shadow transition-transform hover:-translate-y-1">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-2xl bg-rose-soft text-rose">
                    <HeartIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-ink">{c.title}</h3>
                  <p className="mt-1 text-sm text-ink/70">{c.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
