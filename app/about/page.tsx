"use client"

import { FloatingElements } from "@/components/ui/floating-elements"
import { AboutHeroSection } from "@/components/about/hero-section"
import { AboutStatsSection } from "@/components/about/stats-section"
import { AboutSkillsSection } from "@/components/about/skills-section"
import { AboutArtistStatementSection } from "@/components/about/artist-statement-section"
import { AboutTimelineSection } from "@/components/about/timeline-section"

/**
 * About sayfası - Sanatçı hakkında bilgileri gösterir
 * Hero, istatistikler, beceriler, sanatçı açıklaması ve zaman çizelgesi bölümlerini içerir
 */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <FloatingElements />
      
      {/* Hero Section */}
      <AboutHeroSection />
      
      {/* Stats Section */}
      <AboutStatsSection />
      
      {/* Skills Section */}
      <AboutSkillsSection />
      
      {/* Artist Statement Section */}
      <AboutArtistStatementSection />
      
      {/* Timeline Section */}
      <AboutTimelineSection />
    </div>
  )
}
