"use client"

import { Calendar, Award, Users, Coffee } from "lucide-react"
import { AnimatedCard } from "@/components/ui/animated-card"
import { useLanguageStore } from "@/lib/store"

export function AboutStatsSection() {
  const { t } = useLanguageStore()

  const stats = [
    { icon: Award, label: t("about.stats.completedProjects"), value: "150+" },
    { icon: Users, label: t("about.stats.happyClients"), value: "50+" },
    { icon: Coffee, label: t("about.stats.coffee"), value: "1000+" },
    { icon: Calendar, label: t("about.stats.experience"), value: "5+" },
  ]

  return (
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
  )
} 