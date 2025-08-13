"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguageStore } from "@/lib/store"
import { motion, AnimatePresence } from "framer-motion"

/**
 * Hero Section bileşeni - Video arka plan ile otomatik geçişli slider
 */
export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const { t } = useLanguageStore()

  // Öne çıkan eserler listesi
  const featuredArtworks = [
    {
      id: 1,
      title: "Zaman Akışı",
      year: "2024",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop",
      description: "Zamanın akışını ve değişimi yansıtan çağdaş bir eser"
    },
    {
      id: 2,
      title: "İç Dünya",
      year: "2023",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?w=1920&h=1080&fit=crop",
      description: "İnsan ruhunun derinliklerini keşfeden soyut kompozisyon"
    },
    {
      id: 3,
      title: "Doğa Diyalogu",
      year: "2024",
      image: "https://images.pixabay.com/photo-2017/08/30/01/05/milky-way-2695569_1280.jpg?w=1920&h=1080&fit=crop",
      description: "Doğa ile insanlık arasındaki diyalogu anlatan modern tablo"
    }
  ]

  // Otomatik geçiş için useEffect
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredArtworks.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, featuredArtworks.length])

  /**
   * Belirli bir slide'a git
   */
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  /**
   * Sonraki slide'a git
   */
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArtworks.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  /**
   * Önceki slide'a git
   */
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredArtworks.length) % featuredArtworks.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Video Arka Plan */}
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

      {/* Slider Content Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Eser Görseli */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-8"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
                <Image
                  src={featuredArtworks[currentSlide].image}
                  alt={featuredArtworks[currentSlide].title}
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
            </motion.div>

            {/* Eser Bilgileri */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-serif text-4xl lg:text-6xl font-bold text-white"
              >
                {featuredArtworks[currentSlide].title}
              </motion.h1>
              
              <motion.p
                key={`year-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl lg:text-2xl text-white/90"
              >
                {featuredArtworks[currentSlide].year}
              </motion.p>
              
              <motion.p
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto"
              >
                {featuredArtworks[currentSlide].description}
              </motion.p>

              {/* CTA Butonları */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
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
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center space-x-8 pt-8 border-t border-white/20"
              >
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
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigasyon Kontrolleri */}
      <div className="absolute top-1/2 left-4 lg:left-8 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="w-12 h-12 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110"
          aria-label={t("hero.slider.previousArtwork")}
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 lg:right-8 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="w-12 h-12 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110"
          aria-label={t("hero.slider.nextArtwork")}
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Slide Göstergeleri */}
      <div className="absolute bottom-6 lg:bottom-12 right-6 lg:right-12">
        <div className="flex space-x-3">
          {featuredArtworks.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`${index + 1}. ${t("hero.slider.goToArtwork")}`}
            />
          ))}
        </div>
      </div>

      {/* Otomatik Oynatma Göstergesi */}
      <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/30"
          aria-label={isAutoPlaying ? t("hero.slider.pauseAutoPlay") : t("hero.slider.startAutoPlay")}
        >
          {isAutoPlaying ? (
            <Pause className="h-4 w-4 text-white" />
          ) : (
            <Play className="h-4 w-4 text-white" />
          )}
        </button>
      </div>

      {/* Scroll Göstergesi */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
