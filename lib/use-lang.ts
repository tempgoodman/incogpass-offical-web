"use client"

import { useEffect, useState } from "react"
import { locales, type Lang } from "@/lib/i18n"

const STORAGE_KEY = "incogpass-lang"

// Shared language state. Persists the user's EN / 繁 choice so it stays
// consistent when navigating between pages.
export function useLang() {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "en" || stored === "zh") {
      setLangState(stored)
    }
  }, [])

  const setLang = (next: Lang) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  return { lang, setLang, t: locales[lang] }
}
