"use client"

import { ShieldCheck } from "lucide-react"
import type { Dict } from "@/lib/i18n"

export function Footer({ t }: { t: Dict }) {
  const links = [
    t.footer.links.privacy,
    t.footer.links.terms,
    t.footer.links.merchant,
    t.footer.links.contact,
  ]

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
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

        <div className="flex flex-col gap-1 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.tagline}</p>
          <p>© {new Date().getFullYear()} incogpass.net — {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
