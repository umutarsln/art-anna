"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { AnimatedCard } from "@/components/ui/animated-card"
import { TextReveal } from "@/components/ui/text-reveal"
import { useLanguageStore } from "@/lib/store"

export function AboutSkillsSection() {
  const { t } = useLanguageStore()

  const skills = [
    { name: t("about.skills.digitalIllustration"), level: 95 },
    { name: t("about.skills.photography"), level: 88 },
    { name: t("about.skills.conceptArt"), level: 92 },
    { name: t("about.skills.uiux"), level: 85 },
    { name: t("about.skills.threeD"), level: 78 },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <TextReveal>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{t("about.skills.title")}</h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t("about.skills.subtitle")}
              </p>
            </TextReveal>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <AnimatedCard key={skill.name} delay={index * 0.1}>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>

          <AnimatedCard delay={0.3}>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image src="/images/artist-workspace.png" alt={t("about.skills.workspaceAlt")} fill className="object-cover" />
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  )
} 