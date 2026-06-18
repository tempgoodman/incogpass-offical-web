"use client"

import { useLang } from "@/lib/use-lang"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { TechHero } from "./tech-hero"
import { DiagramTokenization } from "./diagram-tokenization"
import { DiagramIsolation } from "./diagram-isolation"
import { DiagramProxy } from "./diagram-proxy"
import { Faq } from "./faq"

export function TechnologyPage() {
  const { lang, setLang, t } = useLang()

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar t={t} lang={lang} onLangChange={setLang} />
      <main>
        <TechHero t={t} />
        <DiagramTokenization t={t} />
        <DiagramIsolation t={t} />
        <DiagramProxy t={t} />
        <Faq t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}
