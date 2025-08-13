"use client"

import { Filter, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguageStore } from "@/lib/store"

interface GalleryFiltersSectionProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  viewMode: "grid" | "masonry"
  setViewMode: (mode: "grid" | "masonry") => void
}

export function GalleryFiltersSection({ 
  selectedCategory, 
  setSelectedCategory, 
  viewMode, 
  setViewMode 
}: GalleryFiltersSectionProps) {
  const { t } = useLanguageStore()

  const categories = [
    { key: "all", label: t("gallery.categories.all") },
    { key: "digital", label: t("gallery.categories.digital") },
    { key: "photography", label: t("gallery.categories.photography") },
    { key: "painting", label: t("gallery.categories.painting") || "Resim" },
    { key: "sculpture", label: t("gallery.categories.sculpture") || "Heykel" },
  ]

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Filter className="h-5 w-5 text-gray-400" />
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={selectedCategory === category.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.key)}
                  className={
                    selectedCategory === category.key
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-700 border-gray-200"
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "bg-gray-900 text-white" : "bg-white text-gray-700 border-gray-200"}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "masonry" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("masonry")}
              className={viewMode === "masonry" ? "bg-gray-900 text-white" : "bg-white text-gray-700 border-gray-200"}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 