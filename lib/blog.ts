import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  image_url: string
  image?: string
  published: boolean
  featured: boolean
  created_at: string
  date: string
  readTime: string
  author: string
  likes?: number
  comments?: number
  category: {
    id: number
    name: string
    slug: string
    color: string
  }
}

export interface Category {
  id: number
  name: string
  slug: string
  color: string
  description?: string
}

const mockCategories: Record<string, Category[]> = {
  tr: [
    { id: 1, name: "Dijital Sanat", slug: "digital-art", color: "#8B5CF6" },
    { id: 2, name: "Fotoğrafçılık", slug: "photography", color: "#10B981" },
    { id: 3, name: "Resim", slug: "painting", color: "#F59E0B" },
    { id: 4, name: "Heykel", slug: "sculpture", color: "#EF4444" },
    { id: 5, name: "Karma Teknik", slug: "mixed-media", color: "#6366F1" },
  ],
  en: [
    { id: 1, name: "Digital Art", slug: "digital-art", color: "#8B5CF6" },
    { id: 2, name: "Photography", slug: "photography", color: "#10B981" },
    { id: 3, name: "Painting", slug: "painting", color: "#F59E0B" },
    { id: 4, name: "Sculpture", slug: "sculpture", color: "#EF4444" },
    { id: 5, name: "Mixed Media", slug: "mixed-media", color: "#6366F1" },
  ],
  cs: [
    { id: 1, name: "Digitální Umění", slug: "digital-art", color: "#8B5CF6" },
    { id: 2, name: "Fotografie", slug: "photography", color: "#10B981" },
    { id: 3, name: "Malba", slug: "painting", color: "#F59E0B" },
    { id: 4, name: "Sochařství", slug: "sculpture", color: "#EF4444" },
    { id: 5, name: "Smíšená Média", slug: "mixed-media", color: "#6366F1" },
  ],
}

const mockPosts: Record<string, BlogPost[]> = {
  tr: [
    {
      id: 1,
      slug: "digital-art-future",
      title: "Dijital Sanatın Geleceği",
      excerpt: "Teknoloji ve sanatın buluştuğu noktada yeni ifade biçimleri keşfediyoruz.",
      content: `# Dijital Sanatın Geleceği

Dijital sanat dünyası hızla gelişiyor. AI araçları, VR teknolojileri ve yeni yazılımlar sanatçılara daha önce hiç olmadığı kadar geniş imkanlar sunuyor.

## AI ve Sanat

Yapay zeka araçları, sanatçıların yaratıcı süreçlerini desteklemekte ve yeni ifade biçimleri sunmaktadır.

### AI Araçlarının Avantajları

- Hızlı konsept geliştirme
- Sınırsız varyasyon imkanı
- Yaratıcı blokajları aşma
- Yeni stil keşifleri

## Sanal Gerçeklik ve Sanat

VR teknolojisi, sanat eserlerinin deneyimlenme biçimini tamamen değiştirmektedir.`,
      image_url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      published: true,
      featured: true,
      created_at: "2024-01-15T10:00:00Z",
      date: "2024-01-15T10:00:00Z",
      readTime: "5 dk okuma",
      author: "Sanatçı",
      likes: 42,
      comments: 8,
      category: mockCategories.tr[0],
    },
    {
      id: 2,
      slug: "color-theory-guide",
      title: "Renk Teorisi Rehberi",
      excerpt: "Sanatınızda renkleri etkili kullanmanın temel prensipleri.",
      content: `# Renk Teorisi Rehberi

Renk teorisi, her sanatçının bilmesi gereken temel konulardan biridir. Bu rehberde renklerin psikolojik etkilerini ve kompozisyondaki rollerini inceleyeceğiz.

## Temel Renkler

Kırmızı, mavi ve sarı temel renklerdir ve diğer tüm renklerin kaynağıdır.

## Renk Uyumu

- Analog renkler
- Tamamlayıcı renkler
- Üçlü renk uyumu`,
      image_url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      published: true,
      featured: false,
      created_at: "2024-01-10T10:00:00Z",
      date: "2024-01-10T10:00:00Z",
      readTime: "3 dk okuma",
      author: "Sanatçı",
      likes: 28,
      comments: 5,
      category: mockCategories.tr[2],
    },
    {
      id: 3,
      slug: "photography-composition",
      title: "Fotoğraf Kompozisyonu",
      excerpt: "Görsel hikaye anlatımı ve fotoğraf tekniklerinin incelikleri.",
      content: `# Fotoğraf Kompozisyonu

Fotoğraf kompozisyonu, güçlü görsel hikayeler anlatmanın temelidir.

## Üçte Bir Kuralı

En temel kompozisyon kurallarından biri olan üçte bir kuralı, fotoğrafınızı dokuz eşit parçaya böler.

## Işık ve Gölge

- Doğal ışık kullanımı
- Gölgelerin yaratıcı kullanımı
- Altın saat fotoğrafçılığı`,
      image_url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop",
      published: true,
      featured: true,
      created_at: "2024-01-05T10:00:00Z",
      date: "2024-01-05T10:00:00Z",
      readTime: "4 dk okuma",
      author: "Sanatçı",
      likes: 35,
      comments: 12,
      category: mockCategories.tr[1],
    },
  ],
  en: [
    {
      id: 1,
      slug: "digital-art-future",
      title: "The Future of Digital Art",
      excerpt: "Exploring new forms of expression where technology meets art.",
      content: `# The Future of Digital Art

The digital art world is rapidly evolving. AI tools, VR technologies, and new software offer artists unprecedented opportunities.

## AI and Art

Artificial intelligence tools support artists' creative processes and offer new forms of expression.

### Advantages of AI Tools

- Rapid concept development
- Unlimited variation possibilities
- Overcoming creative blocks
- New style discoveries

## Virtual Reality and Art

VR technology is completely changing how art is experienced.`,
      image_url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      published: true,
      featured: true,
      created_at: "2024-01-15T10:00:00Z",
      date: "2024-01-15T10:00:00Z",
      readTime: "5 min read",
      author: "Artist",
      likes: 42,
      comments: 8,
      category: mockCategories.en[0],
    },
    {
      id: 2,
      slug: "color-theory-guide",
      title: "Color Theory Guide",
      excerpt: "Essential principles for using colors effectively in your art.",
      content: `# Color Theory Guide

Color theory is one of the fundamental topics every artist should know. In this guide, we'll explore the psychological effects of colors and their role in composition.

## Primary Colors

Red, blue, and yellow are primary colors and the source of all other colors.

## Color Harmony

- Analogous colors
- Complementary colors
- Triadic color harmony`,
      image_url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      published: true,
      featured: false,
      created_at: "2024-01-10T10:00:00Z",
      date: "2024-01-10T10:00:00Z",
      readTime: "3 min read",
      author: "Artist",
      likes: 28,
      comments: 5,
      category: mockCategories.en[2],
    },
    {
      id: 3,
      slug: "photography-composition",
      title: "Photography Composition",
      excerpt: "Visual storytelling and photographic techniques explored.",
      content: `# Photography Composition

Photography composition is the foundation of telling powerful visual stories.

## Rule of Thirds

One of the most basic composition rules, the rule of thirds divides your photo into nine equal parts.

## Light and Shadow

- Natural light usage
- Creative use of shadows
- Golden hour photography`,
      image_url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop",
      published: true,
      featured: true,
      created_at: "2024-01-05T10:00:00Z",
      date: "2024-01-05T10:00:00Z",
      readTime: "4 min read",
      author: "Artist",
      likes: 35,
      comments: 12,
      category: mockCategories.en[1],
    },
  ],
  cs: [
    {
      id: 1,
      slug: "digital-art-future",
      title: "Budoucnost Digitálního Umění",
      excerpt: "Zkoumáme nové formy vyjádření, kde se setkává technologie s uměním.",
      content: `# Budoucnost Digitálního Umění

Svět digitálního umění se rychle vyvíjí. AI nástroje, VR technologie a nový software nabízejí umělcům bezprecedentní možnosti.

## AI a Umění

Nástroje umělé inteligence podporují tvůrčí procesy umělců a nabízejí nové formy vyjádření.

### Výhody AI Nástrojů

- Rychlý vývoj konceptů
- Neomezené možnosti variací
- Překonávání tvůrčích bloků
- Objevování nových stylů

## Virtuální Realita a Umění

VR technologie zcela mění způsob, jakým je umění zažíváno.`,
      image_url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      published: true,
      featured: true,
      created_at: "2024-01-15T10:00:00Z",
      date: "2024-01-15T10:00:00Z",
      readTime: "5 min čtení",
      author: "Umělec",
      likes: 42,
      comments: 8,
      category: mockCategories.cs[0],
    },
    {
      id: 2,
      slug: "color-theory-guide",
      title: "Průvodce Teorií Barev",
      excerpt: "Základní principy efektivního používání barev ve vašem umění.",
      content: `# Průvodce Teorií Barev

Teorie barev je jedním ze základních témat, které by měl znát každý umělec. V tomto průvodci prozkoumáme psychologické účinky barev a jejich roli v kompozici.

## Základní Barvy

Červená, modrá a žlutá jsou základní barvy a zdrojem všech ostatních barev.

## Barevná Harmonie

- Analogické barvy
- Komplementární barvy
- Triadická barevná harmonie`,
      image_url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      published: true,
      featured: false,
      created_at: "2024-01-10T10:00:00Z",
      date: "2024-01-10T10:00:00Z",
      readTime: "3 min čtení",
      author: "Umělec",
      likes: 28,
      comments: 5,
      category: mockCategories.cs[2],
    },
    {
      id: 3,
      slug: "photography-composition",
      title: "Kompozice Fotografie",
      excerpt: "Vizuální vyprávění a fotografické techniky prozkoumány.",
      content: `# Kompozice Fotografie

Kompozice fotografie je základem vyprávění silných vizuálních příběhů.

## Pravidlo Třetin

Jedno ze základních kompozičních pravidel, pravidlo třetin rozděluje vaši fotografii na devět stejných částí.

## Světlo a Stín

- Použití přirozeného světla
- Kreativní použití stínů
- Fotografie ve zlatou hodinu`,
      image_url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop",
      published: true,
      featured: true,
      created_at: "2024-01-05T10:00:00Z",
      date: "2024-01-05T10:00:00Z",
      readTime: "4 min čtení",
      author: "Umělec",
      likes: 35,
      comments: 12,
      category: mockCategories.cs[1],
    },
  ],
}

export async function getBlogPosts(language = "tr", limit?: number): Promise<BlogPost[]> {
  try {
    let query = supabase
      .from("blog_posts")
      .select(`
        id,
        slug,
        image_url,
        published,
        featured,
        created_at,
        blog_post_translations!inner(
          title,
          excerpt,
          content
        ),
        categories!inner(
          id,
          slug,
          color,
          category_translations!inner(
            name
          )
        )
      `)
      .eq("published", true)
      .eq("blog_post_translations.language_code", language)
      .eq("categories.category_translations.language_code", language)
      .order("created_at", { ascending: false })

    if (limit) {
      query = query.limit(limit)
    }

    const { data, error } = await query

    if (error) {
      console.log("Multilingual tables not available, using mock data")
      const posts = mockPosts[language] || mockPosts.tr
      return limit ? posts.slice(0, limit) : posts
    }

    return (
      data?.map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.blog_post_translations[0]?.title || "",
        excerpt: post.blog_post_translations[0]?.excerpt || "",
        content: post.blog_post_translations[0]?.content || "",
        image_url: post.image_url,
        image: post.image_url,
        published: post.published,
        featured: post.featured,
        created_at: post.created_at,
        date: post.created_at,
        readTime: language === "tr" ? "5 dk okuma" : language === "cs" ? "5 min čtení" : "5 min read",
        author: language === "tr" ? "Sanatçı" : language === "cs" ? "Umělec" : "Artist",
        likes: Math.floor(Math.random() * 50) + 10,
        comments: Math.floor(Math.random() * 20) + 1,
        category: {
          id: post.categories.id,
          name: post.categories.category_translations[0]?.name || "",
          slug: post.categories.slug,
          color: post.categories.color,
        },
      })) || []
    )
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    const posts = mockPosts[language] || mockPosts.tr
    return limit ? posts.slice(0, limit) : posts
  }
}

export async function getBlogPost(slug: string, language = "tr"): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(`
        id,
        slug,
        image_url,
        published,
        featured,
        created_at,
        blog_post_translations!inner(
          title,
          excerpt,
          content
        ),
        categories!inner(
          id,
          slug,
          color,
          category_translations!inner(
            name
          )
        )
      `)
      .eq("slug", slug)
      .eq("published", true)
      .eq("blog_post_translations.language_code", language)
      .eq("categories.category_translations.language_code", language)
      .single()

    if (error) {
      console.log("Multilingual tables not available, using mock data")
      const posts = mockPosts[language] || mockPosts.tr
      return posts.find((post) => post.slug === slug) || null
    }

    if (!data) return null

    return {
      id: data.id,
      slug: data.slug,
      title: data.blog_post_translations[0]?.title || "",
      excerpt: data.blog_post_translations[0]?.excerpt || "",
      content: data.blog_post_translations[0]?.content || "",
      image_url: data.image_url,
      image: data.image_url,
      published: data.published,
      featured: data.featured,
      created_at: data.created_at,
      date: data.created_at,
      readTime: language === "tr" ? "5 dk okuma" : language === "cs" ? "5 min čtení" : "5 min read",
      author: language === "tr" ? "Sanatçı" : language === "cs" ? "Umělec" : "Artist",
      likes: Math.floor(Math.random() * 50) + 10,
      comments: Math.floor(Math.random() * 20) + 1,
      category: {
        id: data.categories.id,
        name: data.categories.category_translations[0]?.name || "",
        slug: data.categories.slug,
        color: data.categories.color,
      },
    }
  } catch (error) {
    console.error("Error fetching blog post:", error)
    const posts = mockPosts[language] || mockPosts.tr
    return posts.find((post) => post.slug === slug) || null
  }
}

export async function getCategories(language = "tr"): Promise<Category[]> {
  try {
    const { data, error } = await supabase
      .from("categories")
      .select(`
        id,
        slug,
        color,
        category_translations!inner(
          name,
          description
        )
      `)
      .eq("category_translations.language_code", language)

    if (error) {
      console.log("Multilingual tables not available, using mock data")
      return mockCategories[language] || mockCategories.tr
    }

    return (
      data?.map((category) => ({
        id: category.id,
        slug: category.slug,
        color: category.color,
        name: category.category_translations[0]?.name || "",
        description: category.category_translations[0]?.description || "",
      })) || []
    )
  } catch (error) {
    console.error("Error fetching categories:", error)
    return mockCategories[language] || mockCategories.tr
  }
}

export async function getRelatedPosts(postId: number, language = "tr", limit = 3): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(`
        id,
        slug,
        image_url,
        published,
        featured,
        created_at,
        blog_post_translations!inner(
          title,
          excerpt,
          content
        ),
        categories!inner(
          id,
          slug,
          color,
          category_translations!inner(
            name
          )
        )
      `)
      .eq("published", true)
      .neq("id", postId)
      .eq("blog_post_translations.language_code", language)
      .eq("categories.category_translations.language_code", language)
      .order("created_at", { ascending: false })
      .limit(limit)

    if (error) {
      console.log("Multilingual tables not available, using mock data")
      const posts = mockPosts[language] || mockPosts.tr
      return posts.filter((post) => post.id !== postId).slice(0, limit)
    }

    return (
      data?.map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.blog_post_translations[0]?.title || "",
        excerpt: post.blog_post_translations[0]?.excerpt || "",
        content: post.blog_post_translations[0]?.content || "",
        image_url: post.image_url,
        image: post.image_url,
        published: post.published,
        featured: post.featured,
        created_at: post.created_at,
        date: post.created_at,
        readTime: language === "tr" ? "5 dk okuma" : language === "cs" ? "5 min čtení" : "5 min read",
        author: language === "tr" ? "Sanatçı" : language === "cs" ? "Umělec" : "Artist",
        likes: Math.floor(Math.random() * 50) + 10,
        comments: Math.floor(Math.random() * 20) + 1,
        category: {
          id: post.categories.id,
          name: post.categories.category_translations[0]?.name || "",
          slug: post.categories.slug,
          color: post.categories.color,
        },
      })) || []
    )
  } catch (error) {
    console.error("Error fetching related posts:", error)
    const posts = mockPosts[language] || mockPosts.tr
    return posts.filter((post) => post.id !== postId).slice(0, limit)
  }
}
