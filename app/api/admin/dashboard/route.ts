import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Mock data döndür
    const stats = {
      totalArtworks: 8,
      totalPosts: 4,
      totalMessages: 3,
      totalViews: 1250,
      recentActivity: [
        { title: "Yeni mesaj alındı", time: "2 saat önce" },
        { title: "Blog yazısı yayınlandı", time: "1 gün önce" },
        { title: "Yeni eser eklendi", time: "3 gün önce" },
      ],
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Dashboard error:", error)
    return NextResponse.json({ error: "Veri yükleme hatası" }, { status: 500 })
  }
}
