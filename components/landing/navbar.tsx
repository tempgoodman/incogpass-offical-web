"use client"

import Link from "next/link"
import { ShieldCheck } from "lucide-react"
import { languages, type Dict, type Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

interface NavbarProps {
  t: Dict
  lang: Lang
  onLangChange: (lang: Lang) => void
}

export function Navbar({ t, lang, onLangChange }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
            <ShieldCheck className="size-5" aria-hidden="true" />
          </span>
          <span className="text-base sm:text-lg">
            incogpass<span className="text-primary">.net</span>
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/technology"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            {t.nav.technology}
          </Link>

          <Link
            href="/merchants"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            {t.nav.merchants}
          </Link>

          <Link
            href="/"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            {t.nav.customer}
          </Link>

          {/* Language switcher */}
          <div
            className="flex items-center rounded-full border border-border bg-secondary/50 p-0.5"
            role="group"
            aria-label="Language switcher"
          >
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => onLangChange(l.code)}
                aria-pressed={lang === l.code}
                className={cn(
                  "rounded-full px-3 py-1 text-sm font-medium transition-colors",
                  lang === l.code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
