"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { getBlogPosts, type BlogPost } from "@/lib/blog"
import { useLanguageStore } from "@/lib/store"

export function LatestPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const { t, language } = useLanguageStore()
  
  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getBlogPosts() // Get last 3 posts
        setPosts(data.slice(0, 3)) // Limit to 3 posts
      } catch (error) {
        console.error("Error loading posts:", error)
      } finally {
        setLoading(false)
      }
    }
    loadPosts()
  }, [language]) // Added language dependency to reload when language changes

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    switch (language) {
      case "tr":
        return date.toLocaleDateString("tr-TR")
      case "en":
        return date.toLocaleDateString("en-US")
      case "cs":
        return date.toLocaleDateString("cs-CZ")
      default:
        return date.toLocaleDateString("tr-TR")
    }
  }

  const getReadingTime = () => {
    switch (language) {
      case "tr":
        return "5 dk okuma"
      case "en":
        return "5 min read"
      case "cs":
        return "5 min čtení"
      default:
        return "5 dk okuma"
    }
  }

  if (loading) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-video rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">{t("home.blog.title")}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t("home.blog.subtitle")}</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">{t("latestPosts.title")}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("latestPosts.subtitle")}
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-video rounded-t-lg overflow-hidden">
                  <Image
                    src={post.image_url || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.published.toString())}</span>
                  </div>
                  <span>•</span>
                  <span>{getReadingTime()}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-semibold group-hover:text-blue-600 transition-colors text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {t("home.blog.readMore")}
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
          >
            <Link href="/blog">
              {t("home.blog.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
