"use client"

import { FloatingElements } from "@/components/ui/floating-elements"
import { CVPersonalInfoSection } from "@/components/cv/personal-info-section"
import { CVExperienceSection } from "@/components/cv/experience-section"
import { CVEducationSection } from "@/components/cv/education-section"
import { CVSkillsSection } from "@/components/cv/skills-section"
import { CVAchievementsSection } from "@/components/cv/achievements-section"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <FloatingElements />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Profesyonel Özgeçmiş
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              15+ yıllık sanatsal deneyim, eğitim ve başarılarımın detaylı özeti.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CVPersonalInfoSection />
        <CVExperienceSection />
        <CVEducationSection />
        <CVSkillsSection />
        <CVAchievementsSection />
      </div>
    </div>
  )
}
