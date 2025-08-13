"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { TextReveal } from "@/components/ui/text-reveal"
import { useLanguageStore } from "@/lib/store"

export function BlogHeaderSection() {
  const { t } = useLanguageStore()

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <TextReveal>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">{t("blog.title")}</h1>
        </TextReveal>
        <TextReveal delay={0.2}>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t("blog.subtitle")}
          </p>
        </TextReveal>

        {/* Search */}
        <TextReveal delay={0.4}>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input placeholder={t("blog.searchPlaceholder")} className="pl-10 bg-white border-gray-200 focus:border-blue-500" />
          </div>
        </TextReveal>
      </div>
    </section>
  )
} 