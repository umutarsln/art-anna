import { type NextRequest, NextResponse } from "next/server"
import { loginAdmin } from "@/lib/admin-auth"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ success: false, error: "E-posta ve şifre gerekli" }, { status: 400 })
    }

    const result = await loginAdmin(email, password)
    return NextResponse.json(result)
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ success: false, error: "Sunucu hatası" }, { status: 500 })
  }
}
