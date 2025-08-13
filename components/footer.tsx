"use client"

import Link from "next/link"
import { Instagram, Mail, Linkedin, Heart } from "lucide-react"
import { useLanguageStore } from "@/lib/store"

export function Footer() {
  const { t } = useLanguageStore()

  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-serif text-2xl font-semibold text-gray-800">{t("footer.artist")}</span>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>{t("footer.madeWith")}</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>{t("footer.inIstanbul")}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-semibold text-gray-800">{t("footer.quickLinks")}</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/gallery"
                className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium hover:translate-x-1 transform duration-200"
              >
                {t("navigation.gallery")}
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium hover:translate-x-1 transform duration-200"
              >
                {t("navigation.about")}
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium hover:translate-x-1 transform duration-200"
              >
                {t("navigation.blog")}
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium hover:translate-x-1 transform duration-200"
              >
                {t("navigation.contact")}
              </Link>
              <Link
                href="/cv"
                className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium hover:translate-x-1 transform duration-200"
              >
                {t("navigation.cv")}
              </Link>
            </div>
          </div>

          {/* Social Links & Contact */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-semibold text-gray-800">{t("footer.links")}</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-gray-200 text-pink-600 hover:text-pink-700 hover:bg-pink-50 transition-all duration-200 hover:scale-105"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="mailto:A.knoppova@seznam.cz"
                  className="p-3 bg-white rounded-xl border border-gray-200 text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 hover:scale-105"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-gray-200 text-blue-700 hover:text-blue-800 hover:bg-blue-50 transition-all duration-200 hover:scale-105"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>A.knoppova@seznam.cz</p>
                <p>
                  {t("footer.location")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">{t("footer.copyright")}</p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-gray-700 transition-colors">
                {t("footer.privacyPolicy")}
              </Link>
              <Link href="/terms" className="hover:text-gray-700 transition-colors">
                {t("footer.termsOfService")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
