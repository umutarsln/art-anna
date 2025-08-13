"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { AnimatedCard } from "@/components/ui/animated-card"
import { TextReveal } from "@/components/ui/text-reveal"
import { useLanguageStore } from "@/lib/store"

export function AboutHeroSection() {
  const { t } = useLanguageStore()

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <TextReveal>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t("about.hero.greeting")}
                <span className="block text-blue-600">{t("about.hero.artist")}</span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t("about.hero.description1")}
              </p>
            </TextReveal>
            <TextReveal delay={0.4}>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("about.hero.description2")}
              </p>
            </TextReveal>
          </div>

          <AnimatedCard delay={0.3}>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <Image src="/images/artist-portrait.png" alt={t("about.hero.portraitAlt")} fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full blur-xl opacity-60" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-pink-100 rounded-full blur-xl opacity-60" />
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  )
} 