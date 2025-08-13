"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguageStore } from "@/lib/store"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguageStore()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/primera-p.mp4" type="video/mp4" />
          {t("common.error")}
        </video>
        
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                {t("hero.title")}
                <span className="block text-gray-200">{t("hero.subtitle")}</span>
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
                {t("hero.description")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/gallery">
                  {t("hero.exploreGallery")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group bg-transparent text-white border-white hover:bg-white/10"
              >
                <Play className="mr-2 h-4 w-4" />
                {t("hero.artStory")}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex space-x-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-sm text-gray-200">{t("hero.stats.artworks")}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-gray-200">{t("hero.stats.experience")}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-sm text-gray-200">{t("hero.stats.projects")}</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop&crop=center"
                alt="Artist Workspace"
                fill
                className="object-cover"
                priority
              />

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-sm font-medium text-gray-900">{t("hero.workingNow")}</div>
                <div className="text-xs text-gray-600">{t("hero.newProject")}</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
