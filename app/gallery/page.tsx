"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { FloatingElements } from "@/components/ui/floating-elements"
import { galleryImages, type GalleryImage } from "@/lib/gallery-images"
import { ArtworkModal } from "@/components/gallery/artwork-modal"
import { useLanguageStore } from "@/lib/store"

export default function GalleryPage() {
  const { t } = useLanguageStore()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedArtwork, setSelectedArtwork] = useState<GalleryImage | null>(null)
  const [artworks] = useState<GalleryImage[]>(galleryImages)

  const categories = [
    { id: 'all', name: t("gallery.categories.all"), count: artworks.length },
    { id: 'digital', name: t("gallery.categories.digital"), count: artworks.filter(a => a.category === 'digital').length },
    { id: 'photography', name: t("gallery.categories.photography"), count: artworks.filter(a => a.category === 'photography').length },
    { id: 'painting', name: t("gallery.categories.painting"), count: artworks.filter(a => a.category === 'painting').length },
    { id: 'sculpture', name: t("gallery.categories.sculpture"), count: artworks.filter(a => a.category === 'sculpture').length }
  ]

  const filteredArtworks = selectedCategory === "all" 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory)

  const handleArtworkClick = (artwork: GalleryImage) => {
    setSelectedArtwork(artwork)
  }

  const handleCloseModal = () => {
    setSelectedArtwork(null)
  }

  return (
    <div className="min-h-screen bg-white relative">
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              {t("gallery.title")}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("gallery.subtitle")}
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredArtworks.map((artwork, index) => (
                <motion.div
                  key={artwork.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handleArtworkClick(artwork)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 hover:shadow-xl transition-all duration-500">
                    <div className="aspect-[4/5] relative">
                      <Image
                        src={artwork.image_url}
                        alt={artwork.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="font-serif text-xl font-semibold mb-2">
                            {t(`gallery.artworkTitles.${artwork.title}`)}
                          </h3>
                          <div className="flex items-center justify-between text-sm">
                            <span>{artwork.dimensions}</span>
                            <span>{artwork.medium}</span>
                          </div>
                        </div>
                      </div>

                      {/* View Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1 rounded-full">
                          {artwork.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Artwork Info */}
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                                                                <h3 className="font-serif text-lg font-semibold text-gray-900">
                        {t(`gallery.artworkTitles.${artwork.title}`)}
                      </h3>
                      <span className="text-sm text-blue-600 font-medium">
                        {artwork.year}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 space-x-4">
                      <span>{artwork.dimensions}</span>
                      <span>•</span>
                      <span>{artwork.medium}</span>
                    </div>
                    {artwork.description && (
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                        {t(`gallery.artworkDescriptions.${artwork.description}`)}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

              {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t("gallery.callToAction.title")}
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                {t("gallery.callToAction.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                  {t("gallery.callToAction.requestProject")}
                </button>
                <button className="px-8 py-3 border border-blue-300 text-blue-700 rounded-lg font-medium hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  {t("gallery.callToAction.viewPortfolio")}
                </button>
              </div>
            </motion.div>
          </div>
        </section>

      <ArtworkModal artwork={selectedArtwork} onClose={handleCloseModal} />
    </div>
  )
}
