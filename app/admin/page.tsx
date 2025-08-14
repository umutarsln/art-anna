"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageIcon, FileText, MessageSquare, Eye, TrendingUp, Calendar, Plus } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

/**
 * Admin dashboard sayfası - Yönetim paneli ana sayfası
 */
export default function AdminDashboard() {
  const { t } = useLanguage()
  const [stats, setStats] = useState({
    totalArtworks: 8,
    totalPosts: 4,
    totalMessages: 3,
    totalViews: 1250,
    recentActivity: [
      { title: "Yeni mesaj alındı", time: "2 saat önce" },
      { title: "Blog yazısı yayınlandı", time: "1 gün önce" },
      { title: "Yeni eser eklendi", time: "3 gün önce" },
    ],
  })

  const statCards = [
    {
      title: t("admin.dashboard.totalArtworks"),
      value: stats.totalArtworks,
      icon: ImageIcon,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      href: "/admin/artworks",
    },
    {
      title: t("admin.dashboard.totalPosts"),
      value: stats.totalPosts,
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-50",
      href: "/admin/blog",
    },
    {
      title: t("admin.dashboard.totalMessages"),
      value: stats.totalMessages,
      icon: MessageSquare,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      href: "/admin/messages",
    },
    {
      title: t("admin.dashboard.totalMessages"),
      value: stats.totalViews,
      icon: Eye,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      href: "#",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold text-gray-900">{t("admin.dashboard.title")}</h1>
          <p className="text-gray-600 mt-2">{t("admin.dashboard.overview")}</p>
        </div>
        <div className="text-sm text-gray-500">
          {t("common.date")}: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-200 cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor} group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              {t("admin.dashboard.recentActivity")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              {t("admin.dashboard.overview")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer">
                <div className="flex items-center">
                  <Plus className="mr-3 h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-blue-900">{t("admin.artworks.add")}</div>
                    <div className="text-sm text-blue-600">{t("admin.artworks.title")}</div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors cursor-pointer">
                <div className="flex items-center">
                  <Plus className="mr-3 h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium text-green-900">{t("admin.blog.add")}</div>
                    <div className="text-sm text-green-600">{t("admin.blog.title")}</div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors cursor-pointer">
                <div className="flex items-center">
                  <MessageSquare className="mr-3 h-5 w-5 text-purple-600" />
                  <div>
                    <div className="font-medium text-purple-900">{t("admin.messages.title")}</div>
                    <div className="text-sm text-purple-600">{t("admin.dashboard.messages")}</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle>
            {t("language") === "tr" ? "Sistem Durumu" : t("language") === "en" ? "System Status" : "Stav systému"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <div className="font-medium text-green-900">
                  {t("language") === "tr" ? "Veritabanı" : t("language") === "en" ? "Database" : "Databáze"}
                </div>
                <div className="text-sm text-green-600">
                  {t("language") === "tr" ? "Çalışıyor" : t("language") === "en" ? "Running" : "Běží"}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <div className="font-medium text-green-900">API</div>
                <div className="text-sm text-green-600">
                  {t("language") === "tr" ? "Çalışıyor" : t("language") === "en" ? "Running" : "Běží"}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <div className="font-medium text-green-900">
                  {t("language") === "tr" ? "Dosya Sistemi" : t("language") === "en" ? "File System" : "Souborový systém"}
                </div>
                <div className="text-sm text-green-600">
                  {t("language") === "tr" ? "Çalışıyor" : t("language") === "en" ? "Running" : "Běží"}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
