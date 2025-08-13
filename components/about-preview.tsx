"use client"

"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguageStore } from "@/lib/store"

export function AboutPreview() {
  const { t } = useLanguageStore()

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image src="/about.webp" alt="Sanatçı Portresi" fill className="object-cover" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                {t("aboutPreview.title")}
                <span className="block text-gray-600">{t("aboutPreview.subtitle")}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t("aboutPreview.description1")}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t("aboutPreview.description2")}
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">{t("aboutPreview.skillsTitle")}</h3>
              <div className="flex flex-wrap gap-2">
                {t("aboutPreview.skills").map((skill: string) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
            >
              <Link href="/about">
                {t("aboutPreview.learnMore")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
