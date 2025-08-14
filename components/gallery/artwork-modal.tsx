"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Palette, Ruler, User } from "lucide-react"
import { useLanguageStore } from "@/lib/store"
import type { GalleryImage } from "@/lib/gallery-images"

interface ArtworkModalProps {
  artwork: GalleryImage | null
  onClose: () => void
}

export function ArtworkModal({ artwork, onClose }: ArtworkModalProps) {
  const { t } = useLanguageStore()

  if (!artwork) return null

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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative">
              <Image
                src={artwork.image_url || "/placeholder.svg"}
                alt={artwork.title}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <X className="h-5 w-5 text-gray-700" />
              </button>
            </div>
            
            {/* Info Section */}
            <div className="p-8 space-y-6 overflow-y-auto">
              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {getCategoryLabel(artwork.category)}
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                {artwork.title}
              </h2>

              {/* Meta Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <div>
                    <div className="text-xs text-gray-500">Yıl</div>
                    <div className="font-medium text-gray-900">{artwork.year}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4 text-gray-500" />
                  <div>
                    <div className="text-xs text-gray-500">Teknik</div>
                    <div className="font-medium text-gray-900">{artwork.medium}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler className="h-4 w-4 text-gray-500" />
                  <div>
                    <div className="text-xs text-gray-500">Boyut</div>
                    <div className="font-medium text-gray-900">{artwork.dimensions}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <div>
                    <div className="text-xs text-gray-500">Sanatçı</div>
                    <div className="font-medium text-gray-900">{artwork.artist}</div>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">
                  Eser Açıklaması
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {artwork.description}
                </p>
              </div>

              {/* Tags */}
              {artwork.tags && artwork.tags.length > 0 && (
                <div>
                  <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">
                    Etiketler
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {artwork.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Call to Action */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Benzer Eser İste
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    İletişime Geç
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 