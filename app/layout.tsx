import type React from "react"
import type { Metadata } from "next"
import { Poppins, Crimson_Text } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-crimson",
})

export const metadata: Metadata = {
  title: "Sanat Portföyü | Digital Art & Photography",
  description: "Dijital çizim ve fotoğraf çalışmalarının sergilendiği profesyonel sanat portföyü",
  keywords: "sanat, dijital çizim, fotoğraf, portföy, galeri",
  authors: [{ name: "Sanatçı Adı" }],
  openGraph: {
    title: "Sanat Portföyü | Digital Art & Photography",
    description: "Dijital çizim ve fotoğraf çalışmalarının sergilendiği profesyonel sanat portföyü",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${poppins.variable} ${crimsonText.variable} font-sans antialiased bg-white text-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
