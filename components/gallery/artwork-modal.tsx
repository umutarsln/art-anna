"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Eye, Image as ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FluidGlass } from "@/components/ui/fluid-glass"
import { useLanguageStore } from "@/lib/store"
import type { GalleryImage } from "@/lib/gallery-images"

interface ArtworkModalProps {
  artwork: GalleryImage | null
  onClose: () => void
}

export function ArtworkModal({ artwork, onClose }: ArtworkModalProps) {
  const { t } = useLanguageStore()
  const [viewMode, setViewMode] = useState<"image" | "fluid-glass">("image")
  const [glassMode, setGlassMode] = useState<"lens" | "bar" | "cube">("lens")

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
          <div className="relative">
            {/* Header Controls */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-2">
                <Button
                  variant={viewMode === "image" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("image")}
                  className="flex items-center gap-2"
                >
                  <ImageIcon className="h-4 w-4" />
                  {t("gallery.modal.normalView")}
                </Button>
                <Button
                  variant={viewMode === "fluid-glass" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("fluid-glass")}
                  className="flex items-center gap-2"
                >
                  <Eye className="h-4 w-4" />
                  {t("gallery.modal.glassView")}
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/80 backdrop-blur-sm hover:bg-white"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Glass Mode Selector */}
            {viewMode === "fluid-glass" && (
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">{t("gallery.modal.glassMode")}</span>
                    <Button
                      variant={glassMode === "lens" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setGlassMode("lens")}
                    >
                      {t("gallery.modal.lens")}
                    </Button>
                    <Button
                      variant={glassMode === "bar" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setGlassMode("bar")}
                    >
                      {t("gallery.modal.bar")}
                    </Button>
                    <Button
                      variant={glassMode === "cube" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setGlassMode("cube")}
                    >
                      {t("gallery.modal.cube")}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="aspect-video relative">
              {viewMode === "image" ? (
                <Image
                  src={artwork.image_url || "/placeholder.svg"}
                  alt={artwork.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
                  <div className="absolute inset-0">
                    <FluidGlass 
                      mode={glassMode}
                      lensProps={{
                        scale: 0.25,
                        ior: 1.15,
                        thickness: 5,
                        chromaticAberration: 0.1,
                        anisotropy: 0.01
                      }}
                      barProps={{
                        scale: 1,
                        speed: 1
                      }}
                      cubeProps={{
                        scale: 1,
                        rotation: 1
                      }}
                    />
                  </div>
                  {/* Mouse interaction overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/30 text-sm">
                      {t("gallery.modal.mouseHint")}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="p-8">
              <div className="text-sm text-blue-600 font-medium mb-2">
                {getCategoryLabel(artwork.category)}
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">{artwork.title}</h2>
              <p className="text-gray-600 leading-relaxed">{artwork.description}</p>
              
              {/* View Mode Info */}
              {viewMode === "fluid-glass" && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>{t("gallery.modal.glassInfo")}</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 