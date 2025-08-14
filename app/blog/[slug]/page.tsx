"use client"

import { FloatingElements } from "@/components/ui/floating-elements"
import { PostContent } from "@/components/blog/post-content"
import { PostSidebar } from "@/components/blog/post-sidebar"

const blogPost = {
  id: 1,
  title: "Dijital Sanatın Geleceği",
  content: `
# Dijital Sanatın Geleceği

Dijital sanat dünyası hızla gelişiyor. AI araçları, VR teknolojileri ve yeni yazılımlar sanatçılara daha önce hiç olmadığı kadar geniş imkanlar sunuyor.

## AI ve Sanat

Yapay zeka araçları, sanatçıların yaratıcı süreçlerini desteklemekte ve yeni ifade biçimleri sunmaktadır.

## Sanal Gerçeklik ve Sanat

VR teknolojisi, sanat eserlerinin deneyimlenme biçimini tamamen değiştirmektedir.

## Sonuç

Dijital sanatın geleceği parlak görünüyor. Teknolojinin sunduğu imkanlar, sanatçıların yaratıcılıklarını sınırsızca ifade etmelerine olanak sağlıyor.
  `,
  excerpt: "AI ve dijital araçların sanat dünyasına etkilerini keşfediyoruz...",
  image: "/placeholder.svg?height=400&width=800",
  date: "15 Aralık 2024",
  readTime: "5 dk okuma",
  category: "Teknoloji",
  slug: "dijital-sanatin-gelecegi",
  author: "Sanatçı",
  likes: 42,
  comments: 8,
}

const relatedPosts = [
  {
    id: 2,
    title: "Renk Teorisi ve Kompozisyon",
    image: "/placeholder.svg?height=200&width=300",
    slug: "renk-teorisi-kompozisyon",
  },
  {
    id: 3,
    title: "Fotoğrafta Işık Kullanımı",
    image: "/placeholder.svg?height=200&width=300",
    slug: "fotografta-isik-kullanimi",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-white relative">
      <FloatingElements />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              {blogPost.category}
            </div>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {blogPost.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {blogPost.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <PostContent content={blogPost.content} />
            </div>
            <div className="lg:col-span-1">
              <PostSidebar 
                likes={blogPost.likes} 
                comments={blogPost.comments} 
                relatedPosts={relatedPosts} 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
