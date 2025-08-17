"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Moon, Sun, Globe, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguageStore, type Language } from "@/lib/store"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, t, setLanguage } = useLanguageStore()
  const pathname = usePathname()

  // Ana sayfa kontrolü
  const isHomePage = pathname === "/"

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: t("navigation.home") },
    { href: "/about", label: t("navigation.about") },
    { href: "/gallery", label: t("navigation.gallery") },
    //{ href: "/blog", label: t("navigation.blog") },
    { href: "/contact", label: t("navigation.contact") },
    { href: "/cv", label: t("navigation.cv") },
  ]

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  // Dinamik renk sınıfları
  const getTextColor = () => {
    if (isHomePage && !scrolled) return "text-white"
    if (isHomePage && scrolled) return "text-gray-900"
    return "text-gray-900"
  }

  const getHoverColor = () => {
    if (isHomePage && !scrolled) return "hover:text-gray-900 hover:bg-white/50"
    return "hover:text-gray-900 hover:bg-gray-100"
  }

  const getActiveColor = () => {
    if (isHomePage && !scrolled) return "text-gray-900 bg-white shadow-lg"
    return "text-white bg-gray-900 shadow-lg"
  }

  const getButtonColor = () => {
    if (isHomePage && !scrolled) return "text-white hover:text-gray-900 hover:bg-white/50"
    return "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
  }

  const getBorderColor = () => {
    if (isHomePage && !scrolled) return "border-white/20"
    return "border-gray-200"
  }

  const getBackgroundColor = () => {
    if (isHomePage && !scrolled) return "bg-transparent"
    if (isHomePage && scrolled) return "bg-white/90 backdrop-blur-xl border-b border-gray-200"
    return "bg-white/90 backdrop-blur-xl border-b border-gray-200"
  }

  // Dil değiştirme fonksiyonu
  const handleLanguageChange = () => {
    const languages: Language[] = ["tr", "en", "cs"]
    const currentIndex = languages.indexOf(language)
    const nextIndex = (currentIndex + 1) % languages.length
    setLanguage(languages[nextIndex])
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getBackgroundColor()}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Center Navigation - Desktop */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className={`flex items-center space-x-1 bg-white/10 backdrop-blur-md rounded-full p-2 border ${getBorderColor()}`}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                        isActive(item.href)
                          ? getActiveColor()
                          : `${getTextColor()} ${getHoverColor()}`
                      }`}
                    >
                      {item.label}

                      {/* Animated underline */}
                      <motion.div
                        className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0, x: "-50%" }}
                        animate={{
                          width: isActive(item.href) ? "80%" : "0%",
                          x: "-50%",
                        }}
                        whileHover={{ width: "80%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-2">
              {/* Language Selector */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="relative group"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border ${getBorderColor()} ${getButtonColor()} transition-all duration-300`}
                  onClick={handleLanguageChange}
                >
                  <Globe className="h-4 w-4" />
                </Button>

                {/* Language tooltip */}
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                    {language === "tr" ? "English" : language === "en" ? "Čeština" : "Türkçe"}
                  </div>
                </div>
              </motion.div>

              {/* Theme Toggle */}
              {mounted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="relative group"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className={`h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border ${getBorderColor()} ${getButtonColor()} transition-all duration-300`}
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotate: theme === "dark" ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </motion.div>
                  </Button>

                  {/* Theme tooltip */}
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                      {theme === "dark" ? t("navigation.lightMode") : t("navigation.darkMode")}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Mobile Menu Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="lg:hidden"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border ${getBorderColor()} ${getButtonColor()} transition-all duration-300`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <motion.div initial={false} animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-xl border-l border-gray-200 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <h2 className="font-serif text-xl font-semibold text-gray-900">{t("navigation.menu")}</h2>
                  <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-8 w-8 rounded-full">
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 px-6 py-8">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                            isActive(item.href)
                              ? "text-white bg-gray-900 shadow-lg"
                              : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mobile Controls */}
                <div className="p-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-white/50 border-gray-200 hover:bg-white"
                      onClick={handleLanguageChange}
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      {language.toUpperCase()}
                    </Button>

                    {mounted && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-white/50 border-gray-200 hover:bg-white"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      >
                        {theme === "dark" ? (
                          <>
                            <Sun className="mr-2 h-4 w-4" />
                            {language === "tr" ? "Açık" : language === "en" ? "Light" : "Světlý"}
                          </>
                        ) : (
                          <>
                            <Moon className="mr-2 h-4 w-4" />
                            {language === "tr" ? "Koyu" : language === "en" ? "Dark" : "Tmavý"}
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
