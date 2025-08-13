"use client"

import { AnimatedCard } from "@/components/ui/animated-card"
import { TextReveal } from "@/components/ui/text-reveal"
import { useLanguageStore } from "@/lib/store"

export function AboutTimelineSection() {
  const { t } = useLanguageStore()

  const timeline = [
    {
      year: "2024",
      title: t("about.timeline.2024.title"),
      description: t("about.timeline.2024.description"),
    },
    {
      year: "2023",
      title: t("about.timeline.2023.title"),
      description: t("about.timeline.2023.description"),
    },
    {
      year: "2022",
      title: t("about.timeline.2022.title"),
      description: t("about.timeline.2022.description"),
    },
    {
      year: "2021",
      title: t("about.timeline.2021.title"),
      description: t("about.timeline.2021.description"),
    },
    {
      year: "2019",
      title: t("about.timeline.2019.title"),
      description: t("about.timeline.2019.description"),
    },
  ]

  return (
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
  )
} 