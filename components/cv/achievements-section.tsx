"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/ui/animated-card"
import { useLanguageStore } from "@/lib/store"

export function CVAchievementsSection() {
  const { t } = useLanguageStore()

  const achievements = [
    {
      title: t("cv.achievements.achievement1.title"),
      organization: t("cv.achievements.achievement1.organization"),
      year: t("cv.achievements.achievement1.year"),
      award: t("cv.achievements.achievement1.award"),
    },
    {
      title: t("cv.achievements.achievement2.title"),
      organization: t("cv.achievements.achievement2.organization"),
      year: t("cv.achievements.achievement2.year"),
      award: t("cv.achievements.achievement2.award"),
    },
    {
      title: t("cv.achievements.achievement3.title"),
      organization: t("cv.achievements.achievement3.organization"),
      year: t("cv.achievements.achievement3.year"),
      award: t("cv.achievements.achievement3.award"),
    },
  ]

  return (
    <AnimatedCard delay={0.8}>
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="h-6 w-6 mr-3 text-blue-600" />
            {t("cv.achievements.title")}
          </h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.organization}</p>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-blue-600">{achievement.award}</div>
                  <div className="text-sm text-gray-500">{achievement.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  )
} 