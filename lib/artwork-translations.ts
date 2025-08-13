export const artworkTranslations = {
  tr: {
    "Dijital Portre Serisi #1": {
      title: "Dijital Portre Serisi #1",
      description: "Modern dijital tekniklerle oluşturulmuş portre çalışması",
    },
    "Şehir Manzarası": {
      title: "Şehir Manzarası",
      description: "Gece şehrinin büyüleyici ışıkları",
    },
    "Soyut Kompozisyon": {
      title: "Soyut Kompozisyon",
      description: "Renk ve formun dans ettiği soyut eser",
    },
    "Doğa Fotoğrafı": {
      title: "Doğa Fotoğrafı",
      description: "Doğanın sakin güzelliğinden bir kare",
    },
    "Karakter Tasarımı": {
      title: "Karakter Tasarımı",
      description: "Fantastik karakter konsept çalışması",
    },
    "Mimari Fotoğraf": {
      title: "Mimari Fotoğraf",
      description: "Modern mimarinin geometrik güzelliği",
    },
    "Dijital İllüstrasyon": {
      title: "Dijital İllüstrasyon",
      description: "Renkli ve dinamik dijital illüstrasyon çalışması",
    },
    "Portre Fotoğrafı": {
      title: "Portre Fotoğrafı",
      description: "Doğal ışıkta çekilmiş portre fotoğrafı",
    },
  },
  en: {
    "Dijital Portre Serisi #1": {
      title: "Digital Portrait Series #1",
      description: "Portrait work created with modern digital techniques",
    },
    "Şehir Manzarası": {
      title: "City Landscape",
      description: "Enchanting lights of the night city",
    },
    "Soyut Kompozisyon": {
      title: "Abstract Composition",
      description: "Abstract work where color and form dance together",
    },
    "Doğa Fotoğrafı": {
      title: "Nature Photography",
      description: "A frame from the serene beauty of nature",
    },
    "Karakter Tasarımı": {
      title: "Character Design",
      description: "Fantasy character concept work",
    },
    "Mimari Fotoğraf": {
      title: "Architectural Photography",
      description: "Geometric beauty of modern architecture",
    },
    "Dijital İllüstrasyon": {
      title: "Digital Illustration",
      description: "Colorful and dynamic digital illustration work",
    },
    "Portre Fotoğrafı": {
      title: "Portrait Photography",
      description: "Portrait photograph taken in natural light",
    },
  },
  cs: {
    "Dijital Portre Serisi #1": {
      title: "Digitální Portrétní Série #1",
      description: "Portrétní práce vytvořená moderními digitálními technikami",
    },
    "Şehir Manzarası": {
      title: "Městská Krajina",
      description: "Okouzlující světla nočního města",
    },
    "Soyut Kompozisyon": {
      title: "Abstraktní Kompozice",
      description: "Abstraktní dílo, kde spolu tančí barva a forma",
    },
    "Doğa Fotoğrafı": {
      title: "Přírodní Fotografie",
      description: "Záběr z klidné krásy přírody",
    },
    "Karakter Tasarımı": {
      title: "Design Postavy",
      description: "Koncepční práce fantasy postavy",
    },
    "Mimari Fotoğraf": {
      title: "Architektonická Fotografie",
      description: "Geometrická krása moderní architektury",
    },
    "Dijital İllüstrasyon": {
      title: "Digitální Ilustrace",
      description: "Barevná a dynamická digitální ilustrační práce",
    },
    "Portre Fotoğrafı": {
      title: "Portrétní Fotografie",
      description: "Portrétní fotografie pořízená v přirozeném světle",
    },
  },
}

export function getArtworkTranslation(originalTitle: string, language: "tr" | "en" | "cs") {
  const translations = artworkTranslations[language]
  return (
    translations[originalTitle as keyof typeof translations] || {
      title: originalTitle,
      description: "",
    }
  )
}
