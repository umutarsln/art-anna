import { createClient } from "@supabase/supabase-js"

// Environment variables kontrolü
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  console.warn("Missing NEXT_PUBLIC_SUPABASE_URL environment variable")
}

if (!supabaseAnonKey) {
  console.warn("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable")
}

// Public client (frontend için)
export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null

// Admin client (backend için)
export const supabaseAdmin =
  supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      })
    : null

// Database types
export interface Artwork {
  id: string
  title: string
  description: string
  category: "digital" | "photography"
  image_url: string
  featured: boolean
  views: number
  status: "draft" | "published" | "archived"
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  image_url: string
  published: boolean
  views: number
  status: "draft" | "published" | "archived"
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  read: boolean
  status: "unread" | "read" | "replied"
  created_at: string
}

export interface AdminUser {
  id: string
  email: string
  name: string
  role: "admin" | "editor"
  created_at: string
  last_login: string | null
}

// Mock data for fallback
const mockStats = {
  totalArtworks: 8,
  totalPosts: 4,
  totalMessages: 3,
  totalViews: 1250,
}

const mockRecentActivity = [
  { title: "Yeni mesaj alındı", time: "2 saat önce" },
  { title: "Blog yazısı yayınlandı", time: "1 gün önce" },
  { title: "Yeni eser eklendi", time: "3 gün önce" },
]

// Admin functions
export async function getAdminStats() {
  if (!supabaseAdmin) {
    console.log("Using mock admin stats")
    return {
      ...mockStats,
      recentActivity: mockRecentActivity,
    }
  }

  try {
    const [artworksResult, postsResult, messagesResult] = await Promise.all([
      supabaseAdmin.from("sanat_artworks").select("id", { count: "exact" }),
      supabaseAdmin.from("sanat_blog_posts").select("id", { count: "exact" }),
      supabaseAdmin.from("sanat_contact_messages").select("id", { count: "exact" }),
    ])

    return {
      totalArtworks: artworksResult.count || 0,
      totalPosts: postsResult.count || 0,
      totalMessages: messagesResult.count || 0,
      totalViews: 1250,
      recentActivity: mockRecentActivity,
    }
  } catch (error) {
    console.error("Error fetching admin stats:", error)
    return {
      ...mockStats,
      recentActivity: mockRecentActivity,
    }
  }
}

export async function getAllArtworksAdmin(): Promise<Artwork[]> {
  if (!supabaseAdmin) {
    console.log("Using mock artworks for admin")
    return []
  }

  try {
    const { data, error } = await supabaseAdmin
      .from("sanat_artworks")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error fetching admin artworks:", error)
    return []
  }
}

export async function getAllBlogPostsAdmin(): Promise<BlogPost[]> {
  if (!supabaseAdmin) {
    console.log("Using mock blog posts for admin")
    return []
  }

  try {
    const { data, error } = await supabaseAdmin
      .from("sanat_blog_posts")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error fetching admin blog posts:", error)
    return []
  }
}

export async function getAllContactMessages(): Promise<ContactMessage[]> {
  if (!supabaseAdmin) {
    console.log("Using mock contact messages for admin")
    return []
  }

  try {
    const { data, error } = await supabaseAdmin
      .from("sanat_contact_messages")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error fetching contact messages:", error)
    return []
  }
}

export async function loginAdmin(email: string, password: string) {
  // Demo için basit authentication
  if (email === "admin@sanatci.com" && password === "admin123") {
    return {
      success: true,
      user: {
        id: "1",
        email: "admin@sanatci.com",
        name: "Admin User",
        role: "admin" as const,
      },
    }
  }

  return { success: false, error: "Geçersiz giriş bilgileri" }
}
