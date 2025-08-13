"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { useLanguageStore } from "@/lib/store"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  slug: string
}

interface FeaturedPostProps {
  post: BlogPost
}

export function BlogFeaturedPost({ post }: FeaturedPostProps) {
  const { t } = useLanguageStore()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCard>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
              <div>
                <div className="text-sm text-blue-600 font-medium mb-2">{t("blog.featured.label")}</div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{post.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <Button asChild className="bg-gray-900 text-white hover:bg-gray-800">
                  <Link href={`/blog/${post.slug}`}>
                    {t("blog.featured.readMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  )
} 