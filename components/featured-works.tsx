"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { galleryImages, type GalleryImage } from "@/lib/gallery-images"
import { useLanguageStore } from "@/lib/store"

export function FeaturedWorks() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [artworks] = useState<GalleryImage[]>(galleryImages.slice(0, 3)) // İlk 3 eseri öne çıkan olarak göster
  const { t } = useLanguageStore()

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length)
  }

  const getCategoryName = (category: string) => {
    switch (category) {
      case "digital":
        return t("gallery.categories.digital")
      case "photography":
        return t("gallery.categories.photography")
      case "painting":
        return t("gallery.categories.painting") || "Resim"
      case "sculpture":
        return t("gallery.categories.sculpture") || "Heykel"
      case "mixed":
        return t("gallery.filters.mixed")
      default:
        return category
    }
  }

  if (artworks.length === 0) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">{t("featuredWorks.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">{t("featuredWorks.noWorks")}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">{t("featuredWorks.title")}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("featuredWorks.subtitle")}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {artworks.map((artwork) => (
                <div key={artwork.id} className="w-full flex-shrink-0">
                  <Card className="border-0 shadow-none">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                          <Image
                            src={artwork.image_url || "/placeholder.svg"}
                            alt={artwork.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="space-y-6 p-8">
                          <div className="space-y-2">
                            <div className="text-sm text-blue-600 font-medium">
                              {artwork.category === "digital" ? t("featuredWorks.digitalArt") : t("featuredWorks.photography")}
                            </div>
                            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">{artwork.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{artwork.description}</p>
                          </div>
                          <Button
                            asChild
                            variant="outline"
                            className="group bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                          >
                            <Link href={`/gallery#${artwork.id}`}>
                              {t("featuredWorks.viewDetails")}
                              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {artworks.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border-gray-300 hover:bg-gray-50"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border-gray-300 hover:bg-gray-50"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {artworks.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-gray-900" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
            <Link href="/gallery">
              {t("featuredWorks.viewAllWorks")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
