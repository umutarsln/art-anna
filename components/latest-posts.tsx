"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getBlogPosts, type BlogPost } from "@/lib/blog"

/**
 * Ana sayfa blog bölümü - Son blog yazılarını gösterir
 */
export function LatestPosts() {
  const { t } = useLanguage()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getBlogPosts()
        setPosts(fetchedPosts.slice(0, 3)) // Sadece ilk 3 yazıyı göster
        setLoading(false)
      } catch (error) {
        console.error("Error fetching blog posts:", error)
        // Fallback data
        const fallbackPosts: BlogPost[] = [
          {
            id: 1,
            title: "Dijital Sanatın Geleceği",
            excerpt: "AI ve dijital araçların sanat dünyasına etkilerini keşfediyoruz...",
            image: "/placeholder.svg?height=300&width=400",
            image_url: "/placeholder.svg?height=300&width=400",
            published: true,
            featured: false,
            created_at: "2024-12-15T10:00:00Z",
            date: "2024-12-15T10:00:00Z",
            readTime: "5 dk okuma",
            category: { id: 1, name: "Teknoloji", slug: "teknoloji", color: "bg-blue-100 text-blue-800" },
            slug: "dijital-sanatin-gelecegi",
            content: "",
            author: "Sanatçı",
            likes: 42,
            comments: 8
          },
          {
            id: 2,
            title: "Renk Teorisi Rehberi",
            excerpt: "Sanatınızda renkleri etkili kullanmanın temel prensipleri...",
            image: "/placeholder.svg?height=300&width=400",
            image_url: "/placeholder.svg?height=300&width=400",
            published: true,
            featured: false,
            created_at: "2024-12-10T10:00:00Z",
            date: "2024-12-10T10:00:00Z",
            readTime: "5 dk okuma",
            category: { id: 2, name: "Teknik", slug: "teknik", color: "bg-green-100 text-green-800" },
            slug: "renk-teorisi-rehberi",
            content: "",
            author: "Sanatçı",
            likes: 38,
            comments: 12
          },
          {
            id: 3,
            title: "Fotoğraf Kompozisyonu",
            excerpt: "Görsel hikaye anlatımı ve fotoğraf tekniklerinin incelikleri...",
            image: "/placeholder.svg?height=300&width=400",
            image_url: "/placeholder.svg?height=300&width=400",
            published: true,
            featured: false,
            created_at: "2024-12-05T10:00:00Z",
            date: "2024-12-05T10:00:00Z",
            readTime: "5 dk okuma",
            category: { id: 3, name: "Fotoğraf", slug: "fotograf", color: "bg-purple-100 text-purple-800" },
            slug: "fotograf-kompozisyonu",
            content: "",
            author: "Sanatçı",
            likes: 45,
            comments: 15
          }
        ]
        setPosts(fallbackPosts)
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) {
        return "Tarih belirtilmemiş"
      }
      
      return date.toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch (error) {
      return "Tarih belirtilmemiş"
    }
  }

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-12"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {t("home.blog.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("home.blog.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-center justify-between text-sm">
                          <span>{formatDate(post.date)}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${post.category.color}`}>
                        {post.category.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {formatDate(post.date)}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                      <span className="text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                        {t("home.blog.readMore")} <ArrowRight className="h-4 w-4 inline ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/blog">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300">
              {t("home.blog.viewAll")}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
