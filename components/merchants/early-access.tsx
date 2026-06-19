"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Dict } from "@/lib/i18n"

export function EarlyAccess({ t }: { t: Dict }) {
  const e = t.merchants.earlyAccess
  const [submitted, setSubmitted] = useState(false)
  const [shopName, setShopName] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    // Smoke-test / waitlist capture — no backend yet
    setSubmitted(true)
  }

  return (
    <section className="border-y border-border bg-primary/5">
      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Closed Beta
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {e.headline}
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
            {e.body}
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-success/30 bg-success/10 px-6 py-10 text-center">
            <CheckCircle2 className="size-10 text-success" aria-hidden="true" />
            <p className="text-lg font-semibold">{e.successMessage}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 shadow-xl shadow-primary/5"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="shop-name" className="text-sm font-medium">
                {e.shopNameLabel}
              </label>
              <input
                id="shop-name"
                type="text"
                required
                value={shopName}
                onChange={(ev) => setShopName(ev.target.value)}
                placeholder={e.shopNamePlaceholder}
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-sm font-medium">
                {e.emailLabel}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                placeholder={e.emailPlaceholder}
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 placeholder:text-muted-foreground"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="mt-2 w-full rounded-full font-semibold shadow-lg shadow-primary/20"
            >
              {e.cta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
