"use client"

import { motion } from "framer-motion"
import { Calendar, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/ui/animated-card"
import { useLanguageStore } from "@/lib/store"

export function CVEducationSection() {
  const { t } = useLanguageStore()

  const education = [
    {
      degree: t("cv.education.degree1.title"),
      school: t("cv.education.degree1.school"),
      period: t("cv.education.degree1.period"),
      description: t("cv.education.degree1.description"),
    },
    {
      degree: t("cv.education.degree2.title"),
      school: t("cv.education.degree2.school"),
      period: t("cv.education.degree2.period"),
      description: t("cv.education.degree2.description"),
    },
    {
      degree: t("cv.education.degree3.title"),
      school: t("cv.education.degree3.school"),
      period: t("cv.education.degree3.period"),
      description: t("cv.education.degree3.description"),
    },
  ]

  return (
    <AnimatedCard delay={0.4}>
      <Card className="mb-12 border-0 shadow-lg">
        <CardContent className="p-8">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <GraduationCap className="h-6 w-6 mr-3 text-blue-600" />
            {t("cv.education.title")}
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-semibold text-lg text-gray-900">{edu.degree}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {edu.period}
                  </div>
                </div>
                <div className="text-gray-600 mb-2 font-medium">{edu.school}</div>
                <p className="text-gray-600 text-sm">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  )
} 