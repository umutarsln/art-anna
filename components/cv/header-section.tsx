"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TextReveal } from "@/components/ui/text-reveal"
import { useLanguageStore } from "@/lib/store"

export function CVHeaderSection() {
  const { t } = useLanguageStore()

  const handleDownloadCV = () => {
    // CV PDF indirme işlemi
    const link = document.createElement("a")
    link.href = "/cv-sanatci.pdf" // PDF dosyasının yolu
    link.download = "Sanatci-CV.pdf"
    link.click()
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <TextReveal>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">{t("cv.title")}</h1>
        </TextReveal>
        <TextReveal delay={0.2}>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t("cv.subtitle")}
          </p>
        </TextReveal>
        <TextReveal delay={0.4}>
          <Button onClick={handleDownloadCV} size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
            <Download className="mr-2 h-5 w-5" />
            {t("cv.downloadButton")}
          </Button>
        </TextReveal>
      </div>
    </section>
  )
} 