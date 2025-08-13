"use client"

import { FloatingElements } from "@/components/ui/floating-elements"
import { CVHeaderSection } from "@/components/cv/header-section"
import { CVPersonalInfoSection } from "@/components/cv/personal-info-section"
import { CVExperienceSection } from "@/components/cv/experience-section"
import { CVEducationSection } from "@/components/cv/education-section"
import { CVSkillsSection } from "@/components/cv/skills-section"
import { CVAchievementsSection } from "@/components/cv/achievements-section"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <FloatingElements />
      <CVHeaderSection />
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
