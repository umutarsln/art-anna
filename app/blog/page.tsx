"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedCard } from "@/components/ui/animated-card"
import { TextReveal } from "@/components/ui/text-reveal"
import { FloatingElements } from "@/components/ui/floating-elements"
import { useLanguage } from "@/contexts/language-context"
import { getCategories, type Category } from "@/lib/blog"

const blogPosts = [
  {
    id: 1,
    title: "Dijital Sanatın Geleceği",
    excerpt: "AI ve dijital araçların sanat dünyasına etkilerini keşfediyoruz...",
    image: "/placeholder.svg?height=300&width=400",
    date: "15 Aralık 2024",
    readTime: "5 dk okuma",
    category: "Teknoloji",
    slug: "dijital-sanatin-gelecegi",
  },
  {
    id: 2,
    title: "Renk Teorisi ve Kompozisyon",
    excerpt: "Etkili kompozisyon oluşturmak için renk teorisinin temellerini öğrenin...",
    image: "/placeholder.svg?height=300&width=400",
    date: "10 Aralık 2024",
    readTime: "7 dk okuma",
    category: "Teknik",
    slug: "renk-teorisi-kompozisyon",
  },
  {
    id: 3,
    title: "Fotoğrafta Işık Kullanımı",
    excerpt: "Doğal ve yapay ışığı kullanarak etkileyici fotoğraflar çekme teknikleri...",
    image: "/placeholder.svg?height=300&width=400",
    date: "5 Aralık 2024",
    readTime: "6 dk okuma",
    category: "Fotoğraf",
    slug: "fotografta-isik-kullanimi",
  },
  {
    id: 4,
    title: "Yaratıcı Süreç ve İlham",
    excerpt: "Sanatsal yaratıcılığı tetikleyen faktörler ve ilham bulma yöntemleri...",
    image: "/placeholder.svg?height=300&width=400",
    date: "1 Aralık 2024",
    readTime: "8 dk okuma",
    category: "Yaratıcılık",
    slug: "yaratici-surec-ilham",
  },
  {
    id: 5,
    title: "Dijital Araçlar ve Yazılımlar",
    excerpt: "Dijital sanat için en iyi araçlar ve yazılımlar...",
    image: "/placeholder.svg?height=300&width=400",
    date: "28 Kasım 2024",
    readTime: "10 dk okuma",
    category: "Araçlar",
    slug: "dijital-araclar-yazilimlar",
  },
  {
    id: 6,
    title: "Sanat Tarihinden İlhamlar",
    excerpt: "Klasik sanat eserlerinden modern dijital sanata yansımalar...",
    image: "/placeholder.svg?height=300&width=400",
    date: "25 Kasım 2024",
    readTime: "9 dk okuma",
    category: "Tarih",
    slug: "sanat-tarihinden-ilhamlar",
  },
]

const categories = [
  { id: 'all', name: 'Tümü', count: blogPosts.length },
  { id: 'Teknoloji', name: 'Teknoloji', count: blogPosts.filter(p => p.category === 'Teknoloji').length },
  { id: 'Teknik', name: 'Teknik', count: blogPosts.filter(p => p.category === 'Teknik').length },
  { id: 'Fotoğraf', name: 'Fotoğraf', count: blogPosts.filter(p => p.category === 'Fotoğraf').length },
  { id: 'Yaratıcılık', name: 'Yaratıcılık', count: blogPosts.filter(p => p.category === 'Yaratıcılık').length },
  { id: 'Araçlar', name: 'Araçlar', count: blogPosts.filter(p => p.category === 'Araçlar').length },
  { id: 'Tarih', name: 'Tarih', count: blogPosts.filter(p => p.category === 'Tarih').length },
]

export default function BlogPage() {
  const { t, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getCategories(language)
        // API'den gelen kategorileri kullan veya fallback olarak local kategorileri kullan
        setLoading(false)
      } catch (error) {
        console.error("Error fetching categories:", error)
        setLoading(false)
      }
    }

    fetchCategories()
  }, [language])

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white relative">
      <FloatingElements />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <TextReveal>
              <h1 className="font-serif text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
                Sanat Yazıları
              </h1>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Sanat, teknik ve yaratıcılık üzerine düşüncelerimi paylaştığım blog
              </p>
            </TextReveal>

            <TextReveal delay={0.4}>
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input placeholder="Yazılarda ara..." className="pl-10 bg-white border-gray-200 focus:border-blue-500 shadow-lg" />
              </div>
            </TextReveal>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative overflow-hidden rounded-2xl bg-gray-100 hover:shadow-xl transition-all duration-500">
                      <div className="aspect-video relative">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="font-serif text-xl font-semibold mb-2">
                              {post.title}
                            </h3>
                            <div className="flex items-center justify-between text-sm">
                              <span>{post.date}</span>
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>

                        {/* View Icon */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowRight className="w-5 h-5 text-green-600" />
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Post Info */}
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                          {post.title}
                        </h3>
                        <span className="text-sm text-green-600 font-medium">
                          {post.date}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 space-x-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Yeni Yazılardan Haberdar Olun
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Sanat ve yaratıcılık üzerine yeni yazılarımı kaçırmamak için bültenime abone olun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input placeholder="E-posta adresiniz" className="flex-1" />
              <Button className="bg-gray-900 text-white hover:bg-gray-800">
                Abone Ol
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
