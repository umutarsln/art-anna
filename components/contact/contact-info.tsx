"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react"
import { AnimatedCard } from "@/components/ui/animated-card"
import { useLanguageStore } from "@/lib/store"

export function ContactInfo() {
  const { t } = useLanguageStore()

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.info.email.title"),
      value: "hello@sanatci.com",
      href: "mailto:hello@sanatci.com",
    },
    {
      icon: Phone,
      title: t("contact.info.phone.title"),
      value: "+90 555 123 45 67",
      href: "tel:+905551234567",
    },
    {
      icon: MapPin,
      title: t("contact.info.location.title"),
      value: "İstanbul, Türkiye",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://instagram.com/sanatci",
      color: "text-pink-600",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/sanatci",
      color: "text-blue-600",
    },
    {
      icon: Mail,
      name: "Behance",
      href: "https://behance.net/sanatci",
      color: "text-blue-500",
    },
  ]

  return (
    <div className="space-y-8">
      <AnimatedCard delay={0.2}>
        <div>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">{t("contact.info.title")}</h2>
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <info.icon className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <div className="font-medium text-gray-900">{info.title}</div>
                  <div className="text-gray-600 group-hover:text-blue-600 transition-colors">{info.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </AnimatedCard>

      <AnimatedCard delay={0.4}>
        <div>
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{t("contact.social.title")}</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors ${social.color}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </AnimatedCard>

      <AnimatedCard delay={0.6}>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{t("contact.hours.title")}</h3>
          <div className="space-y-2 text-gray-600">
            <div className="flex justify-between">
              <span>{t("contact.hours.weekdays")}</span>
              <span>09:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span>{t("contact.hours.saturday")}</span>
              <span>10:00 - 16:00</span>
            </div>
            <div className="flex justify-between">
              <span>{t("contact.hours.sunday")}</span>
              <span>{t("contact.hours.closed")}</span>
            </div>
          </div>
        </div>
      </AnimatedCard>
    </div>
  )
} 