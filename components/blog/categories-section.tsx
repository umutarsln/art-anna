"use client"

import { Button } from "@/components/ui/button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { useLanguageStore } from "@/lib/store"

export function BlogCategoriesSection() {
  const { t } = useLanguageStore()

  const categories = t("blog.categories")

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category: string, index: number) => (
            <AnimatedCard key={category} delay={index * 0.05}>
              <Button
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={
                  index === 0 ? "bg-gray-900 text-white" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                }
              >
                {category}
              </Button>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
} 