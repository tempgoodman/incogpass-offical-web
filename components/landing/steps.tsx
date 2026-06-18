"use client"

import { QrCode, RefreshCw, ShieldCheck } from "lucide-react"
import type { Dict } from "@/lib/i18n"

const icons = [QrCode, RefreshCw, ShieldCheck]

export function Steps({ t }: { t: Dict }) {
  return (
    <section className="relative border-t border-border/60 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{t.steps.title}</h2>
          <p className="mt-4 text-pretty text-muted-foreground">{t.steps.subtitle}</p>
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {t.steps.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <li
                key={item.title}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="text-5xl font-semibold leading-none text-border/80 tabular-nums transition-colors group-hover:text-primary/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
