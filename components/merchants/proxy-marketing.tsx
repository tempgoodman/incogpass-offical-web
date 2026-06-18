"use client"

import { Settings2, Lock, BellRing, ArrowRight, type LucideIcon } from "lucide-react"
import type { Dict } from "@/lib/i18n"

const icons: LucideIcon[] = [Settings2, Lock, BellRing]

export function ProxyMarketing({ t }: { t: Dict }) {
  const p = t.merchants.proxy
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{p.title}</h2>
        <p className="mt-3 text-pretty text-lg text-muted-foreground">{p.subtitle}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
        {p.steps.map((step, i) => {
          const Icon = icons[i]
          const isLast = i === p.steps.length - 1
          return (
            <div key={step.title} className="relative">
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-7">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                    {step.label}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                {/* mock UI snippet for the step */}
                <p className="rounded-lg border border-border bg-secondary/70 px-4 py-3 font-mono text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
              {/* connector arrow between cards */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 z-10 hidden size-6 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-primary lg:flex"
                >
                  <ArrowRight className="size-4" />
                </span>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
