"use client"

import Image from "next/image"
import { ArrowRight, Download, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Dict } from "@/lib/i18n"

export function Hero({ t }: { t: Dict }) {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24 lg:px-8">
        <div className="flex flex-col items-start text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Sparkles className="size-4" aria-hidden="true" />
            {t.hero.badge}
          </span>

          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.headline}
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full bg-primary font-medium text-primary-foreground shadow-[0_0_28px_-6px] shadow-primary/60 hover:bg-primary/90"
            >
              <Download className="size-4" aria-hidden="true" />
              {t.hero.primaryCta}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group rounded-full border-border bg-secondary/40 font-medium text-foreground hover:bg-secondary"
            >
              {t.hero.secondaryCta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-full bg-primary/15 blur-3xl"
          />
          <Image
            src="/hero-shield.png"
            alt={t.hero.imageAlt}
            width={620}
            height={620}
            priority
            className="w-full max-w-md drop-shadow-2xl lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  )
}
