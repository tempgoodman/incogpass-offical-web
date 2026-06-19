"use client"

import { ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Dict } from "@/lib/i18n"

export function MerchantsFooter({ t }: { t: Dict }) {
  const links = [
    t.footer.links.privacy,
    t.footer.links.terms,
    t.footer.links.merchant,
    t.footer.links.contact,
    t.footer.links.joinWaitlist,
  ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* B2B CTA row */}
        <div className="mb-10 flex flex-col items-center gap-4 rounded-2xl border border-border bg-secondary/60 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-lg font-semibold">{t.merchants.hero.headline}</p>
            <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="rounded-full px-6 font-semibold">{t.merchants.footer.contactSales}</Button>
            <Button variant="outline" className="rounded-full border-border bg-card px-6 font-semibold hover:bg-secondary">
              {t.merchants.footer.applyPilot}
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <span>
              incogpass<span className="text-primary">.net</span>
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} incogpass.net — {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
