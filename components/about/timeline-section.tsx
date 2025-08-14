"use client"

import { useState } from "react"
import { AnimatedCard } from "@/components/ui/animated-card"
import { TextReveal } from "@/components/ui/text-reveal"
import { useLanguageStore } from "@/lib/store"

/**
 * About sayfası zaman çizelgesi bölümü - Sanatçının kariyer yolculuğu ve önemli dönüm noktaları
 */
export function AboutTimelineSection() {
  const { t } = useLanguageStore()
  const [activeNode, setActiveNode] = useState<number | null>(null)

  const timeline = [
    {
      id: 1,
      year: "2019",
      title: t("about.timeline.2019.title"),
      description: t("about.timeline.2019.description"),
      category: "Başlangıç",
      details: "Bu dönemde temel sanat eğitimi aldım ve klasik resim tekniklerini öğrendim. Özellikle portre çalışmaları ve natürmort kompozisyonları üzerinde yoğunlaştım. İlk kişisel sergim için hazırlıklara bu dönemde başladım.",
      icon: "🎨",
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      year: "2021",
      title: t("about.timeline.2021.title"),
      description: t("about.timeline.2021.description"),
      category: "Gelişim",
      details: "İlk kişisel sergim büyük ilgi gördü. Yerel sanat eleştirmenleri tarafından 'cesur renk kullanımı ve özgün yaklaşım' ile övgü aldı. Bu sergi, sanatsal kariyerimin dönüm noktası oldu.",
      icon: "🌟",
      color: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      year: "2022",
      title: t("about.timeline.2022.title"),
      description: t("about.timeline.2022.description"),
      category: "Uluslararası",
      details: "Bu deneyim sanatsal vizyonumu genişletti. Avrupa sanat geleneği ile kendi kültürel kökenlerimi harmanlama konusunda önemli keşifler yaptım. Bu dönemde 'Kültürler Arası' serisini oluşturdum.",
      icon: "🌍",
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 4,
      year: "2023",
      title: t("about.timeline.2023.title"),
      description: t("about.timeline.2023.description"),
      category: "Başarı",
      details: "Bu prestijli ödül, sanatsal çalışmalarımın tanınması açısından çok önemliydi. Jüri, 'özgün tarz ve tutarlı sanatsal gelişim' gerekçesiyle beni ödüle layık gördü.",
      icon: "🏆",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      id: 5,
      year: "2024",
      title: t("about.timeline.2024.title"),
      description: t("about.timeline.2024.description"),
      category: "Güncel",
      details: "Günümüzde çevre bilinci yüksek, sürdürülebilir malzemeler kullanarak eserler üretiyorum. Aynı zamanda genç sanatçılara mentorluk yapıyor ve atölye çalışmaları düzenliyorum.",
      icon: "🚀",
      color: "bg-red-100 text-red-800"
    }
  ]

  const categoryColors = {
    "Başlangıç": "bg-blue-100 text-blue-800",
    "Gelişim": "bg-green-100 text-green-800",
    "Uluslararası": "bg-purple-100 text-purple-800",
    "Başarı": "bg-yellow-100 text-yellow-800",
    "Güncel": "bg-red-100 text-red-800"
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <TextReveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t("about.timeline.title")}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Her dönem, sanatsal gelişimimin önemli kilometre taşlarını keşfedin. 
              İnteraktif zaman çizelgesi ile yaratıcı yolculuğumun hikayesini takip edin.
            </p>
          </div>
        </TextReveal>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-blue-600/30 hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-16">
            {timeline.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <button
                    onClick={() => setActiveNode(activeNode === item.id ? null : item.id)}
                    className={`w-16 h-16 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${
                      activeNode === item.id
                        ? 'bg-blue-600 scale-110 shadow-xl'
                        : 'bg-gray-300 hover:bg-blue-500 hover:scale-105'
                    }`}
                  >
                    <span className="text-2xl mx-auto block mt-1">
                      {item.icon}
                    </span>
                  </button>
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <AnimatedCard delay={index * 0.2}>
                    <div 
                      className={`bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-100 cursor-pointer transition-all duration-300 ${
                        activeNode === item.id ? 'scale-105 shadow-2xl border-blue-200' : 'hover:scale-102 hover:shadow-xl'
                      }`}
                      onClick={() => setActiveNode(activeNode === item.id ? null : item.id)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-serif text-2xl lg:text-3xl font-bold text-blue-600">
                          {item.year}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.color}`}>
                          {item.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>

                      <p className="font-body text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {activeNode === item.id && (
                        <div className="border-t border-gray-200 pt-4 mt-4">
                          <p className="font-body text-sm text-gray-600 leading-relaxed">
                            {item.details}
                          </p>
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-4">
                        <span className="font-body text-xs text-gray-500">
                          Detaylar için tıklayın
                        </span>
                        <svg 
                          className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                            activeNode === item.id ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </AnimatedCard>
                </div>

                {/* Mobile Timeline Indicator */}
                <div className="lg:hidden w-full flex justify-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">{item.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <TextReveal delay={0.8}>
          <div className="text-center mt-16 pt-12 border-t border-gray-200">
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              Yaratım Yolculuğumu Takip Edin
            </h3>
            <p className="font-body text-gray-600 mb-6 max-w-xl mx-auto">
              Her yeni dönem, her yeni deneyim beni daha da geliştiriyor. 
              Sanatsal evrimimin devam eden hikayesini keşfetmeye devam edin.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300">
              Güncel Çalışmaları İncele
            </button>
          </div>
        </TextReveal>
      </div>
    </section>
  )
} 