"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/ui/animated-card"
import { TextReveal } from "@/components/ui/text-reveal"
import { useLanguageStore } from "@/lib/store"

export function ContactFAQSection() {
  const { t } = useLanguageStore()

  const faqs = [
    {
      question: t("contact.faq.question1"),
      answer: t("contact.faq.answer1"),
    },
    {
      question: t("contact.faq.question2"),
      answer: t("contact.faq.answer2"),
    },
    {
      question: t("contact.faq.question3"),
      answer: t("contact.faq.answer3"),
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <TextReveal>
          <h2 className="font-serif text-3xl font-bold text-gray-900 text-center mb-12">{t("contact.faq.title")}</h2>
        </TextReveal>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
} 