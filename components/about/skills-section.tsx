"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { AnimatedCard } from "@/components/ui/animated-card"
import { TextReveal } from "@/components/ui/text-reveal"
import { useLanguageStore } from "@/lib/store"

/**
 * About sayfası beceriler bölümü - Sanatçının teknik yetenekleri ve uzmanlık alanları
 */
export function AboutSkillsSection() {
  const { t } = useLanguageStore()

  const skills = [
    { 
      name: t("about.skills.digitalIllustration"), 
      level: 95,
      description: "Dijital araçlarla profesyonel illüstrasyon ve konsept sanat",
      icon: "🎨",
      category: "Dijital"
    },
    { 
      name: t("about.skills.photography"), 
      level: 88,
      description: "Portre, manzara ve sanatsal fotoğrafçılık teknikleri",
      icon: "📸",
      category: "Geleneksel"
    },
    { 
      name: t("about.skills.conceptArt"), 
      level: 92,
      description: "Film, oyun ve reklam için konsept sanat tasarımı",
      icon: "🎭",
      category: "Konsept"
    },
    { 
      name: t("about.skills.uiux"), 
      level: 85,
      description: "Kullanıcı deneyimi ve arayüz tasarımı",
      icon: "💻",
      category: "Dijital"
    },
    { 
      name: t("about.skills.threeD"), 
      level: 78,
      description: "3D modelleme ve dijital heykel sanatı",
      icon: "🗿",
      category: "3D"
    },
    {
      name: "Geleneksel Resim",
      level: 90,
      description: "Yağlı boya, akrilik ve sulu boya teknikleri",
      icon: "🖼️",
      category: "Geleneksel"
    }
  ]

  const skillCategories = [
    { name: "Dijital", color: "bg-blue-100 text-blue-800", count: 3 },
    { name: "Geleneksel", color: "bg-green-100 text-green-800", count: 2 },
    { name: "Konsept", color: "bg-purple-100 text-purple-800", count: 1 },
    { name: "3D", color: "bg-orange-100 text-orange-800", count: 1 }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <TextReveal>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {t("about.skills.title")}
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t("about.skills.subtitle")}
              </p>
            </TextReveal>

            {/* Skill Categories */}
            <div className="mb-8">
              <h3 className="font-serif text-lg font-semibold text-gray-900 mb-4">
                Uzmanlık Alanları
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.map((category) => (
                  <span
                    key={category.name}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}
                  >
                    {category.name} ({category.count})
                  </span>
                ))}
              </div>
            </div>

            {/* Skills Progress */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <AnimatedCard key={skill.name} delay={index * 0.1}>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <div>
                          <span className="font-medium text-gray-900">{skill.name}</span>
                          <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                            skill.category === 'Dijital' ? 'bg-blue-100 text-blue-800' :
                            skill.category === 'Geleneksel' ? 'bg-green-100 text-green-800' :
                            skill.category === 'Konsept' ? 'bg-purple-100 text-purple-800' :
                            'bg-orange-100 text-orange-800'
                          }`}>
                            {skill.category}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
              <h4 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                Yeni Teknikler Öğrenmeye Devam
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Sanat teknolojilerindeki gelişmeleri takip ederek sürekli kendimi geliştiriyorum.
              </p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Teknik Detayları İncele
              </button>
            </div>
          </div>

          <AnimatedCard delay={0.3}>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
                <Image 
                  src="/images/artist-workspace.png" 
                  alt={t("about.skills.workspaceAlt")} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full blur-xl opacity-60" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full blur-xl opacity-60" />
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center opacity-80">
                <span className="text-2xl">🎨</span>
              </div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center opacity-80">
                <span className="text-xl">📐</span>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  )
} 