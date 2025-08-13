"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard, ImageIcon, FileText, MessageSquare, Settings, LogOut, Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function SimpleAdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { t } = useLanguage()

  const adminNavItems = [
    { href: "/admin", label: t.admin.dashboard.title, icon: LayoutDashboard },
    { href: "/admin/artworks", label: t.admin.artworks.title, icon: ImageIcon },
    { href: "/admin/blog", label: t.admin.blog.title, icon: FileText },
    { href: "/admin/messages", label: t.admin.messages.title, icon: MessageSquare },
    {
      href: "/admin/settings",
      label: t.language === "tr" ? "Ayarlar" : t.language === "en" ? "Settings" : "Nastavení",
      icon: Settings,
    },
  ]

  useEffect(() => {
    console.log("Current pathname:", pathname)

    if (pathname === "/admin/login") {
      setLoading(false)
      return
    }

    // Check authentication
    const checkAuth = () => {
      const cookies = document.cookie.split(";")
      const adminToken = cookies.find((cookie) => cookie.trim().startsWith("admin-token="))

      console.log("All cookies:", document.cookie)
      console.log("Admin token cookie:", adminToken)

      if (adminToken) {
        const token = adminToken.split("=")[1]
        try {
          const decoded = JSON.parse(atob(token))
          console.log("Decoded token:", decoded)

          if (decoded.exp && decoded.exp > Date.now()) {
            console.log("Token valid, setting authenticated")
            setIsAuthenticated(true)
          } else {
            console.log("Token expired")
            router.push("/admin/login")
          }
        } catch (e) {
          console.log("Token decode error:", e)
          router.push("/admin/login")
        }
      } else {
        console.log("No admin token found")
        router.push("/admin/login")
      }

      setLoading(false)
    }

    checkAuth()
  }, [pathname, router])

  const handleLogout = () => {
    document.cookie = "admin-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    setIsAuthenticated(false)
    router.push("/admin/login")
  }

  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{t.common.loading}</p>
          <p className="text-xs text-gray-400 mt-2">Path: {pathname}</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            {t.language === "tr"
              ? "Oturum açmanız gerekiyor"
              : t.language === "en"
                ? "You need to log in"
                : "Musíte se přihlásit"}
          </p>
          <Button onClick={() => router.push("/admin/login")}>{t.admin.login.login}</Button>
          <p className="text-xs text-gray-400 mt-2">Current path: {pathname}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setSidebarOpen(false)}>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-serif text-lg font-semibold text-gray-800">{t.admin.title}</span>
          </div>
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {adminNavItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* User info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-gray-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p className="text-xs text-gray-500 truncate">admin@sanatci.com</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full text-gray-600 hover:text-gray-900 bg-transparent"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            {t.language === "tr" ? "Çıkış Yap" : t.language === "en" ? "Logout" : "Odhlásit se"}
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                {t.language === "tr" ? "Hoş geldin, Admin" : t.language === "en" ? "Welcome, Admin" : "Vítej, Admin"}
              </span>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
