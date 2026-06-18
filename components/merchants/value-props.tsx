"use client"

import { Zap, Target, ShieldCheck, type LucideIcon } from "lucide-react"
import type { Dict } from "@/lib/i18n"

const icons: LucideIcon[] = [Zap, Target, ShieldCheck]

export function ValueProps({ t }: { t: Dict }) {
  const v = t.merchants.values
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{v.title}</h2>
        <p className="mt-3 text-pretty text-lg text-muted-foreground">{v.subtitle}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {v.items.map((item, i) => {
          const Icon = icons[i]
          return (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
