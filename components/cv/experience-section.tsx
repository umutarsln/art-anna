"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/ui/animated-card"
import { useLanguageStore } from "@/lib/store"

export function CVExperienceSection() {
  const { t } = useLanguageStore()

  const experiences = [
    {
      title: t("cv.experience.job1.title"),
      company: t("cv.experience.job1.company"),
      period: t("cv.experience.job1.period"),
      location: t("cv.experience.job1.location"),
      description: t("cv.experience.job1.description"),
    },
    {
      title: t("cv.experience.job2.title"),
      company: t("cv.experience.job2.company"),
      period: t("cv.experience.job2.period"),
      location: t("cv.experience.job2.location"),
      description: t("cv.experience.job2.description"),
    },
    {
      title: t("cv.experience.job3.title"),
      company: t("cv.experience.job3.company"),
      period: t("cv.experience.job3.period"),
      location: t("cv.experience.job3.location"),
      description: t("cv.experience.job3.description"),
    },
  ]

  return (
    <AnimatedCard delay={0.2}>
      <Card className="mb-12 border-0 shadow-lg">
        <CardContent className="p-8">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Briefcase className="h-6 w-6 mr-3 text-blue-600" />
            {t("cv.experience.title")}
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-blue-100 last:border-l-0"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-semibold text-lg text-gray-900">{exp.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {Array.isArray(exp.description) ? exp.description.map((item: string, i: number) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    )) : (
                      <li className="text-gray-600 text-sm flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {exp.description}
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  )
} 