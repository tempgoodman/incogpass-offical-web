"use client"

import { useLang } from "@/lib/use-lang"
import { Navbar } from "@/components/landing/navbar"
import { B2bHero } from "./b2b-hero"
import { ValueProps } from "./value-props"
import { BidSection } from "./bid-section"
import { ProxyMarketing } from "./proxy-marketing"
import { Pricing } from "./pricing"
import { MerchantsFooter } from "./merchants-footer"

export function MerchantsPage() {
  const { lang, setLang, t } = useLang()

  return (
    // .theme-light scopes the bright B2B palette to this page only
    <div className="theme-light min-h-dvh bg-background text-foreground">
      <Navbar t={t} lang={lang} onLangChange={setLang} />
      <main>
        <B2bHero t={t} />
        <ValueProps t={t} />
        <BidSection t={t} />
        <ProxyMarketing t={t} />
        <Pricing t={t} />
      </main>
      <MerchantsFooter t={t} />
    </div>
  )
}
