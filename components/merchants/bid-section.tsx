"use client"

import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Dict } from "@/lib/i18n"
import bidImage from "@/public/bid-highstreet.png"

export function BidSection({ t }: { t: Dict }) {
  const b = t.merchants.bid
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        {/* Illustration */}
        <div className="order-last lg:order-first">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5">
            <Image
              src={bidImage || "/placeholder.svg"}
              alt={b.imageAlt}
              className="h-auto w-full"
              placeholder="blur"
              priority
            />
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full border border-accent/30 bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent-foreground">
            {b.badge}
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{b.title}</h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{b.body}</p>
          <ul className="flex flex-col gap-3">
            {b.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="font-medium">{point}</span>
              </li>
            ))}
          </ul>
          <div>
            <Button size="lg" className="mt-2 rounded-full px-7 font-semibold shadow-lg shadow-primary/20">
              {b.cta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
