"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Lock, Mail, AlertCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("admin@sanatci.com")
  const [password, setPassword] = useState("admin123")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      if (email === "admin@sanatci.com" && password === "admin123") {
        const user = {
          id: "1",
          email: "admin@sanatci.com",
          name: "Admin User",
          role: "admin",
          exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
        }

        const token = btoa(JSON.stringify(user))

        // Set cookie
        document.cookie = `admin-token=${token}; path=/; max-age=${7 * 24 * 60 * 60}; samesite=strict`

        console.log("Login successful, token set:", token.substring(0, 20) + "...")
        console.log("Cookie set, redirecting to /admin")

        // Add short delay
        setTimeout(() => {
          window.location.href = "/admin"
        }, 100)
      } else {
        setError(t.admin.login.error)
      }
    } catch (error) {
      console.error("Login error:", error)
      setError(t.common.error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-white font-bold text-3xl">A</span>
            </div>
            <CardTitle className="text-3xl font-serif font-bold text-gray-900">{t.admin.title}</CardTitle>
            <p className="text-gray-600 mt-2">{t.admin.login.title}</p>
          </CardHeader>

          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                  {t.admin.login.email}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-11 h-12 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="admin@sanatci.com"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700 block">
                  {t.admin.login.password}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-11 pr-11 h-12 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="••••••••"
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    disabled={loading}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium text-base shadow-lg hover:shadow-xl transition-all duration-200"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {t.common.loading}
                  </div>
                ) : (
                  t.admin.login.login
                )}
              </Button>
            </form>

            {/* Demo Information */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="text-sm font-medium text-blue-900 mb-2">
                {t.language === "tr"
                  ? "Demo Hesap Bilgileri:"
                  : t.language === "en"
                    ? "Demo Account Info:"
                    : "Demo účet:"}
              </h4>
              <div className="text-sm text-blue-700 space-y-1">
                <p>
                  <strong>{t.admin.login.email}:</strong> admin@sanatci.com
                </p>
                <p>
                  <strong>{t.admin.login.password}:</strong> admin123
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
