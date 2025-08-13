export interface AdminUser {
  id: string
  email: string
  name: string
  role: string
}

// Basit token sistemi (demo için)
export function generateToken(user: AdminUser): string {
  return btoa(JSON.stringify({ ...user, exp: Date.now() + 7 * 24 * 60 * 60 * 1000 }))
}

export function verifyToken(token: string): AdminUser | null {
  try {
    const decoded = JSON.parse(atob(token))
    if (decoded.exp < Date.now()) {
      return null
    }
    return {
      id: decoded.id,
      email: decoded.email,
      name: decoded.name,
      role: decoded.role,
    }
  } catch {
    return null
  }
}

export async function loginAdmin(email: string, password: string) {
  // Demo authentication
  if (email === "admin@sanatci.com" && password === "admin123") {
    const user = {
      id: "1",
      email: "admin@sanatci.com",
      name: "Admin User",
      role: "admin",
    }

    const token = generateToken(user)

    return {
      success: true,
      user,
      token,
    }
  }

  return { success: false, error: "Geçersiz giriş bilgileri" }
}
