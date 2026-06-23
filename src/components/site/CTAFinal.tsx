import { ArrowUp } from "lucide-react";
import { Reveal } from "./Reveal";
import { HeartIcon, StarIcon } from "./Decor";

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-rose via-grape to-teal opacity-95" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-20">
        <HeartIcon className="absolute left-[8%] top-[20%] h-10 w-10 text-white" />
        <StarIcon className="absolute right-[12%] top-[30%] h-8 w-8 text-white" />
        <HeartIcon className="absolute right-[18%] bottom-[20%] h-6 w-6 text-white" />
        <StarIcon className="absolute left-[20%] bottom-[18%] h-5 w-5 text-white" />
      </div>
      <div className="mx-auto max-w-4xl px-4 text-center text-white sm:px-6">
        <Reveal>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Tu futuro merece <br className="hidden sm:block" />
            <span className="font-hand">decisiones informadas</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Infórmate, conversa, pide orientación y cuida tu salud.
          </p>
          <a
            href="#prevencion"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-grape chip-shadow transition-transform hover:scale-[1.03]"
          >
            <ArrowUp className="h-4 w-4" /> Volver a prevención
          </a>
        </Reveal>
      </div>
    </section>
  );
}
