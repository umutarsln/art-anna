"use client"

import { TextReveal } from "@/components/ui/text-reveal"
import { useLanguageStore } from "@/lib/store"

export function AboutArtistStatementSection() {
  const { t } = useLanguageStore()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <TextReveal>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
            {t("about.artistStatement.title")}
          </h2>
        </TextReveal>
        <TextReveal delay={0.2}>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              {t("about.artistStatement.text")}
            </p>
          </div>
        </TextReveal>
      </div>
    </section>
  )
} 