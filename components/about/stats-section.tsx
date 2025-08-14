"use client"

import { Calendar, Award, Users, Coffee, Palette, Globe } from "lucide-react"
import { AnimatedCard } from "@/components/ui/animated-card"
import { useLanguageStore } from "@/lib/store"

/**
 * About sayfası istatistikler bölümü - Sanatçının başarıları ve deneyimleri
 */
export function AboutStatsSection() {
  const { t } = useLanguageStore()

  const stats = [
    { 
      icon: Award, 
      label: t("about.stats.completedProjects"), 
      value: "150+",
      description: t("about.stats.completedProjectsDescription"),
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    { 
      icon: Users, 
      label: t("about.stats.happyClients"), 
      value: "50+",
      description: t("about.stats.happyClientsDescription"),
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    { 
      icon: Palette, 
      label: t("about.stats.technicalDiversity"), 
      value: "12+",
      description: t("about.stats.technicalDiversityDescription"),
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    { 
      icon: Globe, 
      label: t("about.stats.internationalExhibition"), 
      value: "8+",
      description: t("about.stats.internationalExhibitionDescription"),
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    { 
      icon: Coffee, 
      label: t("about.stats.coffee"), 
      value: "1000+",
      description: t("about.stats.coffeeDescription"),
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    { 
      icon: Calendar, 
      label: t("about.stats.experience"), 
      value: "5+",
      description: t("about.stats.experienceDescription"),
      color: "text-red-600",
      bgColor: "bg-red-100"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {t("about.stats.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("about.stats.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <AnimatedCard key={stat.label} delay={index * 0.1}>
              <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              {t("about.stats.continuousDevelopment")}
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("about.stats.continuousDevelopmentText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 