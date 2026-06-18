"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Dict } from "@/lib/i18n"

export function Pricing({ t }: { t: Dict }) {
  const p = t.merchants.pricing
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{p.title}</h2>
          <p className="mt-3 text-pretty text-lg text-muted-foreground">{p.subtitle}</p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-3">
          {p.tiers.map((tier) => {
            const isNumericPrice = /^[£$€]/.test(tier.price)
            return (
              <div
                key={tier.name}
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border bg-card p-8",
                  tier.featured
                    ? "border-primary shadow-2xl shadow-primary/15 lg:-translate-y-3"
                    : "border-border",
                )}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                    {p.popular}
                  </span>
                )}
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{tier.tagline}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                  {isNumericPrice && (
                    <span className="text-sm font-medium text-muted-foreground">{p.perMonth}</span>
                  )}
                </div>
                <Button
                  className={cn(
                    "mt-6 w-full rounded-full font-semibold",
                    !tier.featured && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                  )}
                  variant={tier.featured ? "default" : "secondary"}
                >
                  {tier.cta}
                </Button>
                <ul className="mt-8 flex flex-col gap-3 border-t border-border pt-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
