"use client"

import { FloatingElements } from "@/components/ui/floating-elements"
import { ContactHeaderSection } from "@/components/contact/header-section"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactFAQSection } from "@/components/contact/faq-section"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <FloatingElements />
      <ContactHeaderSection />
      <section className="py-16">
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
