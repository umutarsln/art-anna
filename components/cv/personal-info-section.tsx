"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/ui/animated-card"
import { useLanguageStore } from "@/lib/store"

export function CVPersonalInfoSection() {
  const { t } = useLanguageStore()

  const contactInfo = [
    { icon: Mail, value: "hello@sanatci.com" },
    { icon: Phone, value: "+90 555 123 45 67" },
    { icon: MapPin, value: "İstanbul, Türkiye" },
  ]

  return (
    <AnimatedCard>
      <Card className="mb-12 border-0 shadow-lg">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">{t("cv.personalInfo.title")}</h2>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <info.icon className="h-5 w-5 mr-3 text-blue-600" />
                    {info.value}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{t("cv.personalInfo.about")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("cv.personalInfo.description")}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  )
} 