import { FileLock2 } from "lucide-react"
import type { Dict } from "@/lib/i18n"

export function TechHero({ t }: { t: Dict }) {
  const tech = t.tech.hero
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      {/* Abstract secure-grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklch, var(--primary) 22%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--primary) 22%, transparent) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 80%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-primary">
          <FileLock2 className="size-3.5" aria-hidden="true" />
          {tech.badge}
        </span>
        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{tech.headline}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {tech.subheadline}
        </p>
      </div>
    </section>
  )
}
