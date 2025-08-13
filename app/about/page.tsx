"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Award, Users, Mail, Coffee } from "lucide-react"
import { AnimatedCard } from "@/components/ui/animated-card"
import { TextReveal } from "@/components/ui/text-reveal"
import { FloatingElements } from "@/components/ui/floating-elements"
import { AboutHeroSection } from "@/components/about/hero-section"
import { AboutStatsSection } from "@/components/about/stats-section"
import { AboutSkillsSection } from "@/components/about/skills-section"
import { AboutArtistStatementSection } from "@/components/about/artist-statement-section"
import { AboutTimelineSection } from "@/components/about/timeline-section"


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <FloatingElements />

      {/* Hero Section */}
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

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCard key={stat.label} delay={index * 0.1}>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Artist Statement Section */}
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

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <TextReveal>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
              {t("about.timeline.title")}
            </h2>
          </TextReveal>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedCard key={item.year} delay={index * 0.2}>
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.year.slice(-2)}
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="text-sm text-blue-600 font-medium mb-1">{item.year}</div>
                        <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
