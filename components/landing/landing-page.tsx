"use client"

import { useLang } from "@/lib/use-lang"
import { Navbar } from "./navbar"
import { Hero } from "./hero"
import { Compare } from "./compare"
import { Steps } from "./steps"
import { Footer } from "./footer"

export function LandingPage() {
  const { lang, setLang, t } = useLang()

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar t={t} lang={lang} onLangChange={setLang} />
      <main>
        <Hero t={t} />
        <Compare t={t} />
        <Steps t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}
