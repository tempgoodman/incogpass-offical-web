"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Dict } from "@/lib/i18n"

export function B2bHero({ t }: { t: Dict }) {
  const h = t.merchants.hero
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:py-28">
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          {h.badge}
        </span>
        <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {h.headline}
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {h.subheadline}
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" className="rounded-full px-7 font-semibold shadow-lg shadow-primary/20">
            {h.primaryCta}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-border bg-card px-7 font-semibold hover:bg-secondary"
          >
            {h.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  )
}
