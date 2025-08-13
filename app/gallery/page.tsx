"use client"

import { useState } from "react"
import { FloatingElements } from "@/components/ui/floating-elements"
import { galleryImages, type GalleryImage } from "@/lib/gallery-images"
import { GalleryHeaderSection } from "@/components/gallery/header-section"
import { GalleryFiltersSection } from "@/components/gallery/filters-section"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { ArtworkModal } from "@/components/gallery/artwork-modal"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedArtwork, setSelectedArtwork] = useState<GalleryImage | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")
  const [artworks] = useState<GalleryImage[]>(galleryImages)

  const filteredArtworks = artworks.filter(
    (artwork) => selectedCategory === "all" || artwork.category === selectedCategory,
  )

  const handleArtworkClick = (artwork: GalleryImage) => {
    setSelectedArtwork(artwork)
  }

  const handleCloseModal = () => {
    setSelectedArtwork(null)
  }

  return (
    <div className="min-h-screen bg-white relative">
      <FloatingElements />
      <GalleryHeaderSection />
      <GalleryFiltersSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid
            artworks={filteredArtworks}
            viewMode={viewMode}
            onArtworkClick={handleArtworkClick}
          />
        </div>
      </section>
      <ArtworkModal artwork={selectedArtwork} onClose={handleCloseModal} />
    </div>
  )
}
