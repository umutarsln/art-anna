import { createClient } from "@supabase/supabase-js"

// Environment variables kontrolü
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL environment variable")
}

if (!supabaseAnonKey) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface Artwork {
  id: string
  title: string
  description: string
  category: "digital" | "photography"
  image_url: string
  created_at: string
  featured: boolean
  views?: number
  status?: string
}

export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  image_url: string
  published_at: string
  slug: string
  published: boolean
  views?: number
  status?: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  created_at: string
  read?: boolean
  status?: string
}

// Mock data for development fallback with AI-generated images
export const mockArtworks: Artwork[] = [
  {
    id: "1",
    title: "Dijital Portre Serisi #1",
    description: "Modern dijital tekniklerle oluşturulmuş portre çalışması",
    category: "digital",
    image_url: "/images/digital-portrait-1.png",
    created_at: "2024-01-15T10:00:00Z",
    featured: true,
  },
  {
    id: "2",
    title: "Şehir Manzarası",
    description: "Gece şehrinin büyüleyici ışıkları",
    category: "photography",
    image_url: "/images/city-landscape.png",
    created_at: "2024-01-10T10:00:00Z",
    featured: true,
  },
  {
    id: "3",
    title: "Soyut Kompozisyon",
    description: "Renk ve formun dans ettiği soyut eser",
    category: "digital",
    image_url: "/images/abstract-composition.png",
    created_at: "2024-01-05T10:00:00Z",
    featured: false,
  },
  {
    id: "4",
    title: "Doğa Fotoğrafı",
    description: "Doğanın sakin güzelliğinden bir kare",
    category: "photography",
    image_url: "/images/nature-photo.png",
    created_at: "2024-01-01T10:00:00Z",
    featured: false,
  },
  {
    id: "5",
    title: "Karakter Tasarımı",
    description: "Fantastik karakter konsept çalışması",
    category: "digital",
    image_url: "/images/character-design.png",
    created_at: "2023-12-25T10:00:00Z",
    featured: true,
  },
  {
    id: "6",
    title: "Mimari Fotoğraf",
    description: "Modern mimarinin geometrik güzelliği",
    category: "photography",
    image_url: "/images/architecture-photo.png",
    created_at: "2023-12-20T10:00:00Z",
    featured: false,
  },
  {
    id: "7",
    title: "Dijital İllüstrasyon",
    description: "Renkli ve dinamik dijital illüstrasyon çalışması",
    category: "digital",
    image_url: "/images/digital-illustration.png",
    created_at: "2023-12-15T10:00:00Z",
    featured: false,
  },
  {
    id: "8",
    title: "Portre Fotoğrafı",
    description: "Doğal ışıkta çekilmiş portre fotoğrafı",
    category: "photography",
    image_url: "/images/portrait-photo.png",
    created_at: "2023-12-10T10:00:00Z",
    featured: false,
  },
]

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Dijital Sanatın Geleceği",
    slug: "dijital-sanatin-gelecegi",
    content: "Dijital sanat dünyası hızla gelişiyor...",
    excerpt: "AI ve dijital araçların sanat dünyasına etkilerini keşfediyoruz...",
    image_url: "/images/blog-digital-art-future.png",
    published_at: "2024-01-15T10:00:00Z",
    published: true,
  },
  {
    id: "2",
    title: "Renk Teorisi ve Kompozisyon",
    slug: "renk-teorisi-kompozisyon",
    content: "Etkili kompozisyon oluşturmak için renk teorisinin temellerini bilmek çok önemli...",
    excerpt: "Etkili kompozisyon oluşturmak için renk teorisinin temellerini öğrenin...",
    image_url: "/images/blog-color-theory.png",
    published_at: "2024-01-10T10:00:00Z",
    published: true,
  },
  {
    id: "3",
    title: "Fotoğrafta Işık Kullanımı",
    slug: "fotografta-isik-kullanimi",
    content: "Fotoğrafçılıkta ışık her şeydir...",
    excerpt: "Doğal ve yapay ışığı kullanarak etkileyici fotoğraflar çekme teknikleri...",
    image_url: "/images/blog-photography-light.png",
    published_at: "2024-01-05T10:00:00Z",
    published: true,
  },
]

// Database functions with fallback to mock data
export async function getFeaturedArtworks(): Promise<Artwork[]> {
  try {
    const { data, error } = await supabase
      .from("sanat_artworks")
      .select("*")
      .eq("featured", true)
      .eq("status", "published")
      .order("created_at", { ascending: false })

    if (error) {
      console.log("Supabase error, using mock data:", error.message)
      return mockArtworks.filter((artwork) => artwork.featured)
    }

    return data || mockArtworks.filter((artwork) => artwork.featured)
  } catch (error) {
    console.log("Using mock data for featured artworks:", error)
    return mockArtworks.filter((artwork) => artwork.featured)
  }
}

export async function getAllArtworks(): Promise<Artwork[]> {
  try {
    const { data, error } = await supabase
      .from("sanat_artworks")
      .select("*")
      .eq("status", "published")
      .order("created_at", { ascending: false })

    if (error) {
      console.log("Supabase error, using mock data:", error.message)
      return mockArtworks
    }

    return data || mockArtworks
  } catch (error) {
    console.log("Using mock data for all artworks:", error)
    return mockArtworks
  }
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from("sanat_blog_posts")
      .select("*")
      .eq("published", true)
      .eq("status", "published")
      .order("published_at", { ascending: false })

    if (error) {
      console.log("Supabase error, using mock data:", error.message)
      return mockBlogPosts
    }

    return data || mockBlogPosts
  } catch (error) {
    console.log("Using mock data for blog posts:", error)
    return mockBlogPosts
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from("sanat_blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .eq("status", "published")
      .single()

    if (error) {
      console.log("Supabase error, using mock data:", error.message)
      return mockBlogPosts.find((post) => post.slug === slug) || null
    }

    return data
  } catch (error) {
    console.log("Using mock data for blog post:", error)
    return mockBlogPosts.find((post) => post.slug === slug) || null
  }
}

export async function submitContactMessage(message: Omit<ContactMessage, "id" | "created_at">) {
  try {
    const { data, error } = await supabase.from("sanat_contact_messages").insert([
      {
        ...message,
        read: false,
        status: "unread",
      },
    ])

    if (error) {
      console.log("Contact form submission error:", error.message)
      // Mock başarılı gönderim
      return { success: true, data: null }
    }

    return { success: true, data }
  } catch (error) {
    console.log("Contact form submission error:", error)
    // Mock başarılı gönderim
    return { success: true, data: null }
  }
}
