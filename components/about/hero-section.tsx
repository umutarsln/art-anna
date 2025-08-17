"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { AnimatedCard } from "@/components/ui/animated-card"
import { TextReveal } from "@/components/ui/text-reveal"
import { useLanguageStore } from "@/lib/store"

/**
 * About sayfası hero section'ı - Sanatçı portresi ve kişisel hikaye
 */
export function AboutHeroSection() {
  const { t } = useLanguageStore()

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20 lg:py-32">
          {/* Artist Portrait */}
          <div className="order-2 lg:order-1">
            <AnimatedCard delay={0.3}>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
                  <Image 
                    src="/about.webp" 
                    alt={t("about.hero.portraitAlt")} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-pink-100 rounded-full blur-xl opacity-60" />
              </div>
            </AnimatedCard>
          </div>

          {/* Artist Statement */}
          <div className="order-1 lg:order-2 space-y-8">
            <TextReveal>
              <div className="space-y-4">
                <h1 className="font-serif text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {t("about.hero.greeting")}
                  <span className="block text-blue-600 font-accent text-5xl lg:text-7xl">
                    {t("about.hero.artist")}
                  </span>
                </h1>
                <div className="w-24 h-1 bg-blue-600"></div>
              </div>
            </TextReveal>

            <TextReveal delay={0.2}>
              <div className="space-y-6">
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  {t("about.hero.description1")}
                </p>
                
                <blockquote className="border-l-4 border-blue-600 pl-6 py-4 bg-gray-50 rounded-r-lg">
                  <p className="font-serif text-xl lg:text-2xl text-gray-900 italic leading-relaxed">
                    "{t("about.hero.manifesto")}"
                  </p>
                  <cite className="text-sm text-gray-600 mt-2 block">
                    — {t("about.hero.manifestoSource")}
                  </cite>
                </blockquote>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {t("about.hero.description2")}
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="text-center">
                    <div className="font-serif text-3xl lg:text-4xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600">{t("about.hero.experience")}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-3xl lg:text-4xl font-bold text-blue-600">200+</div>
                    <div className="text-sm text-gray-600">{t("about.hero.completedWorks")}</div>
                  </div>
                </div>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  )
} 