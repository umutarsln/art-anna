/**
 * Galeri bölümü için örnek sanat eserleri ve görseller
 * Bu veriler gerçek API verisi olmadığında gösterim amaçlı kullanılır
 */

export interface SampleArtwork {
  id: string
  title: string
  description: string
  category: "digital" | "photography" | "painting" | "sculpture"
  image_url: string
  artist: string
  year: number
  dimensions?: string
  medium?: string
}

export const sampleArtworks: SampleArtwork[] = [
  {
    id: "1",
    title: "Mercado Ferreira Borges İç Mekanı",
    description: "Porto, Portekiz'deki tarihi pazar binasının etkileyici cam tavanı ve demir sütunları. Mimari detayların güzelliğini yansıtan bu fotoğraf, ışık ve gölge oyunlarıyla zengin bir atmosfer sunuyor.",
    category: "photography",
    image_url: "https://images.pexels.com/photos/4354431/pexels-photo-4354431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    artist: "Porto Mimari Fotoğrafçılığı",
    year: 2024,
    dimensions: "4000 x 3000 px",
    medium: "Dijital Fotoğraf"
  },
  {
    id: "2",
    title: "Modern Sanat Galerisi",
    description: "Çağdaş sanat eserlerinin sergilendiği modern bir galeri mekanı. Minimalist tasarım ve doğal ışık kullanımıyla sanat eserlerini ön plana çıkaran etkileyici bir iç mekan.",
    category: "photography",
    image_url: "https://images.pexels.com/photos/34633/pexels-photo-34633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    artist: "Mekan Fotoğrafçılığı",
    year: 2024,
    dimensions: "4000 x 3000 px",
    medium: "Dijital Fotoğraf"
  },
  {
    id: "3",
    title: "Tate Modern Sergi Alanı",
    description: "Londra'daki ünlü Tate Modern Sanat Galerisi'nin geniş ve aydınlık sergi alanı. Endüstriyel mimarinin modern sanatla buluştuğu etkileyici bir mekan.",
    category: "photography",
    image_url: "https://images.pexels.com/photos/4354431/pexels-photo-4354431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    artist: "Mimari Belgeleme",
    year: 2024,
    dimensions: "4000 x 3000 px",
    medium: "Dijital Fotoğraf"
  },
  {
    id: "4",
    title: "Yeraltı Galeri Aydınlatması",
    description: "Bir yeraltı galerisinin etkileyici aydınlatma yapısı. Mimari detaylar ve ışık oyunlarıyla yaratılan atmosferik ortam, sanat eserlerine farklı bir boyut katıyor.",
    category: "photography",
    image_url: "https://images.pexels.com/photos/34633/pexels-photo-34633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    artist: "Işık ve Mekan",
    year: 2024,
    dimensions: "4000 x 3000 px",
    medium: "Dijital Fotoğraf"
  },
  {
    id: "5",
    title: "Dijital Sanat Kompozisyonu",
    description: "Modern teknoloji ve geleneksel sanat tekniklerinin birleşimiyle oluşturulan dijital sanat eseri. Renk ve form uyumuyla dikkat çeken çağdaş bir kompozisyon.",
    category: "digital",
    image_url: "https://images.pexels.com/photos/4354431/pexels-photo-4354431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    artist: "Dijital Sanatçı",
    year: 2024,
    dimensions: "3000 x 2000 px",
    medium: "Dijital Sanat"
  },
  {
    id: "6",
    title: "Soyut Resim Serisi",
    description: "Renk teorisi ve soyut düşünceyi birleştiren modern resim serisi. Her bir eser, izleyiciye farklı duygular ve düşünceler sunan derinlikli kompozisyonlar.",
    category: "painting",
    image_url: "https://images.pexels.com/photos/34633/pexels-photo-34633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    artist: "Soyut Sanatçı",
    year: 2024,
    dimensions: "100 x 80 cm",
    medium: "Akrilik Boya"
  },
  {
    id: "7",
    title: "Hediyelik Eşya Vitrini",
    description: "Galeri içindeki özel tasarım hediye eşya vitrini. El yapımı ürünlerin sergilendiği şık ve düzenli bir alan.",
    category: "photography",
    image_url: "https://images.pexels.com/photos/4354431/pexels-photo-4354431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    artist: "Vitrin Tasarımı",
    year: 2024,
    dimensions: "4000 x 3000 px",
    medium: "Dijital Fotoğraf"
  },
  {
    id: "8",
    title: "Çağdaş Heykel Sergisi",
    description: "Modern heykel sanatının en güncel örneklerinin sergilendiği alan. Farklı malzemeler ve tekniklerle yaratılan etkileyici heykel eserleri.",
    category: "sculpture",
    image_url: "https://images.pexels.com/photos/34633/pexels-photo-34633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    artist: "Heykel Sanatçısı",
    year: 2024,
    dimensions: "Çeşitli Boyutlar",
    medium: "Karışık Medya"
  },
  {
    id: "9",
    title: "Galeri Koridor Detayı",
    description: "Galeri mekanındaki mimari detayları gösteren koridor görünümü. Işık ve gölge oyunlarıyla zenginleşen mekan tasarımı.",
    category: "photography",
    image_url: "https://images.pexels.com/photos/4354431/pexels-photo-4354431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    artist: "Mimari Fotoğrafçı",
    year: 2024,
    dimensions: "4000 x 3000 px",
    medium: "Dijital Fotoğraf"
  }
]

/**
 * Kategori filtreleri için örnek veriler
 */
export const sampleCategories = [
  { id: "all", name: "Tümü", count: sampleArtworks.length },
  { id: "photography", name: "Fotoğraf", count: sampleArtworks.filter(art => art.category === "photography").length },
  { id: "digital", name: "Dijital Sanat", count: sampleArtworks.filter(art => art.category === "digital").length },
  { id: "painting", name: "Resim", count: sampleArtworks.filter(art => art.category === "painting").length },
  { id: "sculpture", name: "Heykel", count: sampleArtworks.filter(art => art.category === "sculpture").length }
]
