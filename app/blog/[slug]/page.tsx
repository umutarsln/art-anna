"use client"

import { FloatingElements } from "@/components/ui/floating-elements"
import { PostHeader } from "@/components/blog/post-header"
import { PostContent } from "@/components/blog/post-content"
import { PostSidebar } from "@/components/blog/post-sidebar"

// Mock data - gerçek uygulamada Supabase'den gelecek
const blogPost = {
  id: 1,
  title: "Dijital Sanatın Geleceği",
  content: `
# Dijital Sanatın Geleceği

Dijital sanat dünyası hızla gelişiyor. AI araçları, VR teknolojileri ve yeni yazılımlar sanatçılara daha önce hiç olmadığı kadar geniş imkanlar sunuyor. Bu yazıda, teknolojinin sanat dünyasına etkilerini ve gelecekte bizi bekleyen yenilikleri keşfediyoruz.

## AI ve Sanat

Yapay zeka araçları, sanatçıların yaratıcı süreçlerini desteklemekte ve yeni ifade biçimleri sunmaktadır. Midjourney, DALL-E gibi araçlar, sanatçıların hayal güçlerini genişletmekte ve daha önce mümkün olmayan kompozisyonlar yaratmalarına olanak sağlamaktadır.

### AI Araçlarının Avantajları

- Hızlı konsept geliştirme
- Sınırsız varyasyon imkanı
- Yaratıcı blokajları aşma
- Yeni stil keşifleri

## Sanal Gerçeklik ve Sanat

VR teknolojisi, sanat eserlerinin deneyimlenme biçimini tamamen değiştirmektedir. Artık izleyiciler, sanat eserlerinin içine girebilmekte ve üç boyutlu deneyimler yaşayabilmektedir.

### VR Sanatının Özellikleri

1. **İmmersif Deneyim**: Tamamen sarmalayıcı sanat deneyimi
2. **Etkileşimli Öğeler**: İzleyicinin esere müdahale edebilmesi
3. **Sınırsız Mekan**: Fiziksel kısıtlamaların ortadan kalkması
4. **Çok Duyusal Deneyim**: Görsel, işitsel ve haptik geri bildirim

## Blockchain ve NFT'ler

Blockchain teknolojisi, dijital sanat eserlerinin sahipliği ve ticareti konusunda devrim yaratmıştır. NFT'ler sayesinde dijital eserler benzersiz hale gelmiş ve koleksiyonerlerin ilgisini çekmiştir.

## Gelecekte Bizi Bekleyen Yenilikler

- **Holografik Sanat**: Üç boyutlu hologram teknolojisi
- **Beyin-Bilgisayar Arayüzleri**: Düşünce ile sanat yaratma
- **Quantum Computing**: Karmaşık hesaplamalar ile yeni sanat formları
- **Metaverse Galerileri**: Sanal dünyalarda sanat sergileri

## Sonuç

Dijital sanatın geleceği parlak görünüyor. Teknolojinin sunduğu imkanlar, sanatçıların yaratıcılıklarını sınırsızca ifade etmelerine olanak sağlıyor. Önemli olan, bu araçları sanatsal vizyonumuza hizmet edecek şekilde kullanmaktır.
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
      <PostHeader post={blogPost} />
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <PostContent content={blogPost.content} />
            </div>

            {/* Sidebar */}
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
