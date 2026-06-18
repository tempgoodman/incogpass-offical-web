"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { Dict } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function Faq({ t }: { t: Dict }) {
  const faq = t.tech.faq
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">{faq.title}</h2>
          <p className="mt-3 text-pretty text-muted-foreground">{faq.subtitle}</p>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i
            const panelId = `faq-panel-${i}`
            const buttonId = `faq-button-${i}`
            return (
              <div
                key={item.q}
                className={cn(
                  "rounded-xl border bg-card/60 transition-colors",
                  isOpen ? "border-primary/40" : "border-border",
                )}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-medium text-pretty">{item.q}</span>
                    <ChevronDown
                      className={cn(
                        "size-5 shrink-0 text-primary transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
