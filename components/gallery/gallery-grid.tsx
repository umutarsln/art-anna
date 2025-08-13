"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedCard } from "@/components/ui/animated-card"
import { useLanguageStore } from "@/lib/store"
import type { GalleryImage } from "@/lib/gallery-images"

interface GalleryGridProps {
  artworks: GalleryImage[]
  viewMode: "grid" | "masonry"
  onArtworkClick: (artwork: GalleryImage) => void
}

export function GalleryGrid({ artworks, viewMode, onArtworkClick }: GalleryGridProps) {
  const { t } = useLanguageStore()

  if (artworks.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">{t("gallery.noWorks")}</p>
      </div>
    )
  }

  // Kategori etiketini belirle
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "digital":
        return t("gallery.categories.digital")
      case "photography":
        return t("gallery.categories.photography")
      case "painting":
        return t("gallery.categories.painting") || "Resim"
      case "sculpture":
        return t("gallery.categories.sculpture") || "Heykel"
      default:
        return category
    }
  }

  return (
    <motion.div
      layout
      className={`grid gap-8 ${
        viewMode === "grid"
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          : "columns-1 md:columns-2 lg:columns-3"
      }`}
    >
      <AnimatePresence>
        {artworks.map((artwork, index) => (
          <AnimatedCard key={artwork.id} delay={index * 0.1} className="group cursor-pointer">
            <motion.div
              layout
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              onClick={() => onArtworkClick(artwork)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={artwork.image_url || "/placeholder.svg"}
                  alt={artwork.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {getCategoryLabel(artwork.category)}
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">{artwork.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{artwork.description}</p>
              </div>
            </motion.div>
          </AnimatedCard>
        ))}
      </AnimatePresence>
    </motion.div>
  )
} 