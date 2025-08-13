"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/ui/animated-card"
import { useLanguageStore } from "@/lib/store"

export function CVSkillsSection() {
  const { t } = useLanguageStore()

  const skills = [
    { 
      category: t("cv.skills.digitalArt.title"), 
      items: t("cv.skills.digitalArt.items") 
    },
    { 
      category: t("cv.skills.photography.title"), 
      items: t("cv.skills.photography.items") 
    },
    { 
      category: t("cv.skills.design.title"), 
      items: t("cv.skills.design.items") 
    },
    { 
      category: t("cv.skills.other.title"), 
      items: t("cv.skills.other.items") 
    },
  ]

  return (
    <AnimatedCard delay={0.6}>
      <Card className="mb-12 border-0 shadow-lg">
        <CardContent className="p-8">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Star className="h-6 w-6 mr-3 text-blue-600" />
            {t("cv.skills.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="font-semibold text-gray-900 mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  )
} 