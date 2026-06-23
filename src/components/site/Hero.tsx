import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Compass } from "lucide-react";
import heroImg from "@/assets/hero-teens.png";
import { FLOATING_CHIPS } from "@/lib/content";
import { Blob, FloatingDecor, HeartIcon, StarIcon } from "./Decor";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 md:pt-40 md:pb-28"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-soft/50 via-cream to-lilac/40" />
        <Blob className="absolute -left-24 -top-24 h-[28rem] w-[28rem] text-rose-soft/70" />
        <Blob className="absolute -right-32 top-20 h-[32rem] w-[32rem] text-lilac/80" />
        <Blob className="absolute -bottom-32 left-1/3 h-[26rem] w-[26rem] text-teal/20" />
      </div>
      <FloatingDecor />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        <div>
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-grape soft-shadow"
          >
            <HeartIcon className="h-3 w-3 text-rose" />
            UPN · Facultad de Salud · 2026
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="mt-5 text-4xl font-black leading-[1.05] text-ink sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Prevenir <span className="font-hand text-rose">hoy</span> es
            construir <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-rose via-grape to-teal bg-clip-text text-transparent">
              tu futuro
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-xl text-lg text-ink/75"
          >
            Información clara, decisiones responsables y acompañamiento para
            prevenir el embarazo adolescente.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#prevencion"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose to-grape px-6 py-3 text-sm font-semibold text-white chip-shadow transition-transform hover:scale-[1.03]"
            >
              Conoce cómo prevenirlo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#que-es"
              className="inline-flex items-center gap-2 rounded-full border border-grape/20 bg-white px-6 py-3 text-sm font-semibold text-grape soft-shadow transition-colors hover:bg-lilac/50"
            >
              <Compass className="h-4 w-4" /> Explorar información
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-2">
            {FLOATING_CHIPS.map((c, i) => (
              <motion.span
                key={c}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08 }}
                className="rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-medium text-ink/80 soft-shadow"
              >
                <HeartIcon className="mr-1.5 inline h-3 w-3 text-rose" />
                {c}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto aspect-square w-full max-w-lg"
          >
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-rose-soft via-lilac to-teal/30 blur-2xl opacity-70" />
            <div className="relative h-full rounded-[2.5rem] bg-white/60 p-4 backdrop-blur soft-shadow">
              <motion.img
                src={heroImg}
                alt="Grupo diverso de adolescentes sonriendo, ilustración"
                width={1280}
                height={1024}
                className="h-full w-full object-contain"
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <motion.div
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-10 hidden rounded-2xl bg-white px-4 py-3 soft-shadow sm:block"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-grape">
                <StarIcon className="h-4 w-4 text-amber-400" />
                Decide con información
              </div>
            </motion.div>
            <motion.div
              animate={reduce ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 bottom-10 hidden rounded-2xl bg-white px-4 py-3 soft-shadow sm:block"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-rose">
                <HeartIcon className="h-4 w-4 text-rose" />
                Tu cuerpo, tus decisiones
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
