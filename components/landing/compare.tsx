"use client"

import { Check, ShieldOff, ShieldCheck, X } from "lucide-react"
import type { Dict } from "@/lib/i18n"

export function Compare({ t }: { t: Dict }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{t.compare.title}</h2>
        <p className="mt-4 text-pretty text-muted-foreground">{t.compare.subtitle}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* The Old Way */}
        <article className="relative flex flex-col rounded-2xl border border-destructive/30 bg-card p-8 transition-colors hover:border-destructive/50">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-destructive/15 text-destructive ring-1 ring-destructive/30">
              <ShieldOff className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-destructive">{t.compare.old.tag}</p>
              <h3 className="text-lg font-semibold">{t.compare.old.title}</h3>
            </div>
          </div>
          <p className="text-pretty leading-relaxed text-muted-foreground">{t.compare.old.body}</p>
          <ul className="mt-6 space-y-3">
            {t.compare.old.points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                  <X className="size-3.5" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </article>

        {/* The incogpass Way */}
        <article className="relative flex flex-col rounded-2xl border border-success/40 bg-card p-8 shadow-[0_0_40px_-12px] shadow-success/30 transition-colors hover:border-success/60">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-success/15 text-success ring-1 ring-success/30">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-success">{t.compare.new.tag}</p>
              <h3 className="text-lg font-semibold">{t.compare.new.title}</h3>
            </div>
          </div>
          <p className="text-pretty leading-relaxed text-muted-foreground">{t.compare.new.body}</p>
          <ul className="mt-6 space-y-3">
            {t.compare.new.points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
