"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type Language, translations, type Translations } from "@/lib/i18n"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translations: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

/**
 * Dil sağlayıcı bileşeni - Uygulama genelinde dil desteği sağlar
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr")

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["tr", "en", "cs"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    // Update document lang attribute
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    // Special case for language key
    if (key === "language") {
      return language
    }

    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`)
        return key // Return the key itself as fallback
      }
    }

    return typeof value === "string" ? value : key
  }

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t,
    translations: translations[language],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

/**
 * Dil context'ini kullanmak için hook
 */
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
