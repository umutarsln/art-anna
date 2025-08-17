import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import translations from './translations.json'

export type Language = "tr" | "en" | "cs"

interface LanguageStore {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => any
}

/**
 * Zustand ile dil yönetimi store'u
 * localStorage ile dil tercihi kalıcı olarak saklanır
 */
export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: "en",
      
      setLanguage: (language: Language) => {
        set({ language })
      },
      
      t: (key: string) => {
        const { language } = get()
        const keys = key.split(".")
        let value: any = (translations as any)[language]

        for (const k of keys) {
          if (value && typeof value === "object" && k in value) {
            value = value[k]
          } else {
            // Çeviri bulunamazsa anahtarı döndür
            return key
          }
        }

        return value
      },
    }),
    {
      name: 'language-storage', // localStorage key
    }
  )
) 