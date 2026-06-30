"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { content, type Lang } from "@/lib/i18n"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: (typeof content)["en"]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  useEffect(() => {
    const stored = (typeof window !== "undefined" && window.localStorage.getItem("lang")) as Lang | null
    if (stored === "en" || stored === "fa") setLang(stored)
  }, [])

  useEffect(() => {
    const dir = content[lang].dir
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    if (typeof window !== "undefined") window.localStorage.setItem("lang", lang)
  }, [lang])

  const toggle = () => setLang((prev) => (prev === "en" ? "fa" : "en"))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
