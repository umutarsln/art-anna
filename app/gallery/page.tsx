"use client"

import { useState, useEffect } from "react"
import { FloatingElements } from "@/components/ui/floating-elements"
import { getAllArtworks, type Artwork } from "@/lib/supabase"
import { GalleryHeaderSection } from "@/components/gallery/header-section"
import { GalleryFiltersSection } from "@/components/gallery/filters-section"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { ArtworkModal } from "@/components/gallery/artwork-modal"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadArtworks() {
      try {
        const data = await getAllArtworks()
        setArtworks(data)
      } catch (error) {
        console.error("Error loading artworks:", error)
      } finally {
        setLoading(false)
      }
    }
    loadArtworks()
  }, [])

  const filteredArtworks = artworks.filter(
    (artwork) => selectedCategory === "all" || artwork.category === selectedCategory,
  )

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork)
  }

  const handleCloseModal = () => {
    setSelectedArtwork(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white relative">
        <FloatingElements />
        <GalleryHeaderSection />
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 aspect-square rounded-2xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
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
