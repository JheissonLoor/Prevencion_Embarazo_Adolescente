import type { SVGProps } from "react";

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 21s-7.5-4.6-9.6-9.1C.9 8.6 2.7 5 6.2 5c2 0 3.5 1.1 4.4 2.6h.8C12.3 6.1 13.8 5 15.8 5c3.5 0 5.3 3.6 3.8 6.9C19.5 16.4 12 21 12 21Z" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2l2.4 6.2L21 9l-5 4.4L17.5 21 12 17.5 6.5 21 8 13.4 3 9l6.6-.8L12 2z" />
    </svg>
  );
}

export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden {...props}>
      <path d="M12 2v6m0 8v6M2 12h6m8 0h6M5 5l4 4m6 6 4 4M5 19l4-4m6-6 4-4" />
    </svg>
  );
}

export function Blob({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M44.8 -57.6C58.1 -47.3 68 -32.6 70.7 -16.7C73.4 -0.8 68.9 16.4 59.6 30.1C50.3 43.8 36.2 54.1 20.3 60.1C4.4 66.2 -13.3 68 -28.6 62.1C-43.9 56.2 -56.7 42.5 -63 26.5C-69.4 10.5 -69.2 -7.9 -62.4 -22.9C-55.6 -37.9 -42.2 -49.6 -27.3 -58.6C-12.4 -67.7 4 -74 18.7 -71.4C33.4 -68.8 31.6 -67.9 44.8 -57.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function FloatingDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <HeartIcon className="absolute left-[6%] top-[18%] h-6 w-6 text-rose/50" />
      <StarIcon className="absolute right-[10%] top-[12%] h-5 w-5 text-amber-300/70" />
      <HeartIcon className="absolute right-[18%] bottom-[22%] h-4 w-4 text-grape/40" />
      <StarIcon className="absolute left-[14%] bottom-[14%] h-4 w-4 text-teal/60" />
      <SparkleIcon className="absolute left-[40%] top-[8%] h-4 w-4 text-grape/40" />
    </div>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-grape soft-shadow">
      <HeartIcon className="h-3 w-3 text-rose" />
      {children}
    </span>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
      <h2 className="mt-4 text-3xl font-black leading-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-ink/70 sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
