"use client"

import { TextReveal } from "@/components/ui/text-reveal"
import { useLanguageStore } from "@/lib/store"

export function ContactHeaderSection() {
  const { t } = useLanguageStore()

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <TextReveal>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">{t("contact.title")}</h1>
        </TextReveal>
        <TextReveal delay={0.2}>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </TextReveal>
      </div>
    </section>
  )
} 