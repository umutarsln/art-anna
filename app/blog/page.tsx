"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedCard } from "@/components/ui/animated-card"
import { TextReveal } from "@/components/ui/text-reveal"
import { FloatingElements } from "@/components/ui/floating-elements"
import { BlogHeaderSection } from "@/components/blog/header-section"
import { BlogCategoriesSection } from "@/components/blog/categories-section"
import { BlogFeaturedPost } from "@/components/blog/featured-post"
import { BlogGrid } from "@/components/blog/blog-grid"
import { useLanguage } from "@/contexts/language-context"
import { getBlogPosts, getCategories, type BlogPost, type Category } from "@/lib/blog"

const blogPosts = [
  {
    id: 1,
    title: "Dijital Sanatın Geleceği",
    excerpt:
      "AI ve dijital araçların sanat dünyasına etkilerini keşfediyoruz. Teknolojinin sanatçılara sunduğu yeni imkanlar...",
    image: "/placeholder.svg?height=300&width=400",
    date: "15 Aralık 2024",
    readTime: "5 dk okuma",
    category: "Teknoloji",
    slug: "dijital-sanatin-gelecegi",
  },
  {
    id: 2,
    title: "Renk Teorisi ve Kompozisyon",
    excerpt:
      "Etkili kompozisyon oluşturmak için renk teorisinin temellerini öğrenin. Renklerin psikolojik etkileri ve sanatsal kullanımı...",
    image: "/placeholder.svg?height=300&width=400",
    date: "10 Aralık 2024",
    readTime: "7 dk okuma",
    category: "Teknik",
    slug: "renk-teorisi-kompozisyon",
  },
  {
    id: 3,
    title: "Fotoğrafta Işık Kullanımı",
    excerpt:
      "Doğal ve yapay ışığı kullanarak etkileyici fotoğraflar çekme teknikleri. Işığın fotoğraftaki rolü ve yaratıcı kullanımı...",
    image: "/placeholder.svg?height=300&width=400",
    date: "5 Aralık 2024",
    readTime: "6 dk okuma",
    category: "Fotoğraf",
    slug: "fotografta-isik-kullanimi",
  },
  {
    id: 4,
    title: "Yaratıcı Süreç ve İlham",
    excerpt:
      "Sanatsal yaratıcılığı tetikleyen faktörler ve ilham bulma yöntemleri. Kişisel deneyimlerden yola çıkarak...",
    image: "/placeholder.svg?height=300&width=400",
    date: "1 Aralık 2024",
    readTime: "8 dk okuma",
    category: "Yaratıcılık",
    slug: "yaratici-surec-ilham",
  },
  {
    id: 5,
    title: "Dijital Araçlar ve Yazılımlar",
    excerpt:
      "Dijital sanat için en iyi araçlar ve yazılımlar. Photoshop, Procreate ve diğer popüler uygulamaların karşılaştırması...",
    image: "/placeholder.svg?height=300&width=400",
    date: "28 Kasım 2024",
    readTime: "10 dk okuma",
    category: "Araçlar",
    slug: "dijital-araclar-yazilimlar",
  },
  {
    id: 6,
    title: "Sanat Tarihinden İlhamlar",
    excerpt:
      "Klasik sanat eserlerinden modern dijital sanata yansımalar. Geçmişten günümüze sanatsal akımların etkisi...",
    image: "/placeholder.svg?height=300&width=400",
    date: "25 Kasım 2024",
    readTime: "9 dk okuma",
    category: "Tarih",
    slug: "sanat-tarihinden-ilhamlar",
  },
]

export default function BlogPage() {
  const { t, language } = useLanguage()
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getCategories(language)
        setCategories(fetchedCategories)
      } catch (error) {
        console.error("Error fetching categories:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [language])

  return (
    <div className="min-h-screen bg-white relative">
      <FloatingElements />

      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TextReveal>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Sanat Yazıları</h1>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Sanat, teknik ve yaratıcılık üzerine düşüncelerimi, deneyimlerimi ve öğrendiklerimi paylaştığım blog
            </p>
          </TextReveal>

          {/* Search */}
          <TextReveal delay={0.4}>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input placeholder="Yazılarda ara..." className="pl-10 bg-white border-gray-200 focus:border-blue-500" />
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {loading ? (
              <div className="text-gray-500">Kategoriler yükleniyor...</div>
            ) : (
              categories.map((category: Category, index: number) => (
                <AnimatedCard key={category.id} delay={index * 0.05}>
                  <Button
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className={
                      index === 0 ? "bg-gray-900 text-white" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                    }
                  >
                    {category.name}
                  </Button>
                </AnimatedCard>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                <div>
                  <div className="text-sm text-blue-600 font-medium mb-2">ÖNE ÇIKAN YAZI</div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <Button asChild className="bg-gray-900 text-white hover:bg-gray-800">
                    <Link href={`/blog/${blogPosts[0].slug}`}>
                      Yazıyı Oku
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <AnimatedCard key={post.id} delay={index * 0.1}>
                <motion.article
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Devamını Oku
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </motion.article>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
