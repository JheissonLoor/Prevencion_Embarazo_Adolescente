import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, RefreshCcw, ClipboardCheck } from "lucide-react";
import { ENCUESTA } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./Decor";

export function Encuesta() {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const finished = idx >= ENCUESTA.length;

  function choose(i: number) {
    setAnswers((a) => [...a, i]);
    setTimeout(() => setIdx((v) => v + 1), 280);
  }

  function reset() {
    setIdx(0);
    setAnswers([]);
  }

  const score = answers.reduce((s, a, i) => (ENCUESTA[i].correct === a ? s + 1 : s), 0);
  const gradable = ENCUESTA.filter((q) => q.correct >= 0).length;

  return (
    <section id="encuesta" className="relative bg-gradient-to-b from-rose-soft/40 to-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Encuesta interactiva"
            title={<>Pon a prueba lo que <span className="text-rose">aprendiste</span></>}
            subtitle="5 preguntas rápidas. Las respuestas no se envían a ningún servidor."
          />
        </Reveal>

        <Reveal>
          <div className="mt-10 rounded-[2rem] bg-white p-6 soft-shadow sm:p-10">
            {!finished ? (
              <>
                <div className="mb-6 flex items-center justify-between text-xs font-semibold text-grape">
                  <span>Pregunta {idx + 1} / {ENCUESTA.length}</span>
                  <div className="h-1.5 w-32 overflow-hidden rounded-full bg-lilac">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-rose to-grape transition-all"
                      style={{ width: `${((idx + 1) / ENCUESTA.length) * 100}%` }}
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-ink sm:text-2xl">{ENCUESTA[idx].q}</h3>
                    <ul className="mt-6 grid gap-3">
                      {ENCUESTA[idx].options.map((opt, i) => (
                        <li key={i}>
                          <button
                            onClick={() => choose(i)}
                            className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-lilac bg-white px-5 py-4 text-left text-ink transition-all hover:border-rose hover:bg-rose-soft/40"
                          >
                            <span className="font-medium">{opt}</span>
                            <span className="grid h-7 w-7 place-items-center rounded-full bg-lilac text-xs font-bold text-grape group-hover:bg-rose group-hover:text-white">
                              {String.fromCharCode(97 + i)}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </>
            ) : (
              <div className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-rose to-grape text-white">
                  <ClipboardCheck className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-2xl font-black text-ink sm:text-3xl">
                  {score === gradable ? "¡Excelente!" : "¡Buen trabajo!"}
                </h3>
                <p className="mt-2 text-ink/70">
                  Acertaste <span className="font-bold text-rose">{score}</span> de {gradable} preguntas evaluables.
                </p>

                <ul className="mt-8 grid gap-3 text-left">
                  {ENCUESTA.map((q, i) => {
                    const a = answers[i];
                    const ok = q.correct === a;
                    const evaluable = q.correct >= 0;
                    return (
                      <li key={i} className="rounded-2xl bg-cream p-4">
                        <div className="flex items-start gap-3">
                          <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${evaluable ? (ok ? "bg-teal text-white" : "bg-rose text-white") : "bg-grape text-white"}`}>
                            {evaluable ? (ok ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />) : "?"}
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-ink">{i + 1}. {q.q}</p>
                            <p className="mt-1 text-sm text-ink/70">{q.refuerzo}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <button
                  onClick={reset}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose to-grape px-6 py-3 font-semibold text-white chip-shadow"
                >
                  <RefreshCcw className="h-4 w-4" /> Volver a empezar
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
