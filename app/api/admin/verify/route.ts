import { type NextRequest, NextResponse } from "next/server"
import { verifyToken } from "@/lib/admin-auth"

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get("authorization")?.replace("Bearer ", "")

    if (!token) {
      return NextResponse.json({ error: "Token bulunamadı" }, { status: 401 })
    }

    const user = verifyToken(token)
    if (!user) {
      return NextResponse.json({ error: "Geçersiz token" }, { status: 401 })
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error("Verify error:", error)
    return NextResponse.json({ error: "Doğrulama hatası" }, { status: 500 })
  }
}
