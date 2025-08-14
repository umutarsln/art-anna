"use client"

import { FloatingElements } from "@/components/ui/floating-elements"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactFAQSection } from "@/components/contact/faq-section"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <FloatingElements />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              İletişime Geçin
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Projeler, işbirlikleri veya sadece merhaba demek için benimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <ContactFAQSection />
    </div>
  )
}
