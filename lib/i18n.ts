export type Language = "tr" | "en" | "cs"

export interface Translations {
  // Navigation
  nav: {
    home: string
    about: string
    gallery: string
    blog: string
    contact: string
    cv: string
    admin: string
  }
  // Home page
  home: {
    hero: {
      title: string
      subtitle: string
      description: string
      cta: string
    }
    featured: {
      title: string
      subtitle: string
      viewAll: string
    }
    about: {
      title: string
      subtitle: string
      readMore: string
    }
    blog: {
      title: string
      subtitle: string
      readMore: string
      viewAll: string
    }
  }
  // About page
  about: {
    hero: {
      title: string
      subtitle: string
      description: string
    }
    journey: {
      title: string
      subtitle: string
    }
    skills: {
      title: string
      subtitle: string
    }
    stats: {
      projects: string
      experience: string
      exhibitions: string
      awards: string
    }
    contact: {
      title: string
      email: string
      collaboration: string
    }
  }
  // Gallery page
  gallery: {
    title: string
    subtitle: string
    filters: {
      all: string
      digital: string
      photography: string
      mixed: string
    }
    loading: string
    noResults: string
  }
  // Blog page
  blog: {
    title: string
    subtitle: string
    search: string
    searchPlaceholder: string
    categories: {
      all: string
      art: string
      process: string
      inspiration: string
      exhibitions: string
    }
    readMore: string
    loading: string
    noResults: string
  }
  // Contact page
  contact: {
    title: string
    subtitle: string
    form: {
      name: string
      email: string
      subject: string
      message: string
      send: string
      sending: string
      success: string
      error: string
    }
    info: {
      email: string
      location: string
      availability: string
    }
  }
  // Admin panel
  admin: {
    title: string
    login: {
      title: string
      email: string
      password: string
      login: string
      error: string
    }
    dashboard: {
      title: string
      overview: string
      artworks: string
      blogPosts: string
      messages: string
      totalArtworks: string
      totalPosts: string
      totalMessages: string
      recentActivity: string
    }
    artworks: {
      title: string
      add: string
      edit: string
      delete: string
      title_field: string
      description: string
      category: string
      image: string
      save: string
      cancel: string
    }
    blog: {
      title: string
      add: string
      edit: string
      delete: string
      title_field: string
      content: string
      category: string
      image: string
      published: string
      save: string
      cancel: string
    }
    messages: {
      title: string
      from: string
      subject: string
      date: string
      read: string
      unread: string
      reply: string
      delete: string
    }
  }
  // Common
  common: {
    loading: string
    error: string
    success: string
    cancel: string
    save: string
    delete: string
    edit: string
    view: string
    back: string
    next: string
    previous: string
    close: string
    search: string
    filter: string
    sort: string
    date: string
    category: string
    tags: string
  }
}

export const translations: Record<Language, Translations> = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      gallery: "Galeri",
      blog: "Blog",
      contact: "İletişim",
      cv: "CV",
      admin: "Admin",
    },
    home: {
      hero: {
        title: "Hayal Gücünün Sınırlarını Keşfet",
        subtitle: "Çağdaş Sanat & Görsel Hikayeler",
        description:
          "Gerçeklikten hayal gücüne kaçışın, gizemli atmosferler ve sembolik anlamlarla örülü çalışmalarımı keşfedin.",
        cta: "Çalışmalarımı Keşfet",
      },
      featured: {
        title: "Öne Çıkan Çalışmalar",
        subtitle: "En son projelerimden seçkiler",
        viewAll: "Tümünü Gör",
      },
      about: {
        title: "Sanatçı Hakkında",
        subtitle: "Yaratım sürecim ve sanatsal vizyonum",
        readMore: "Devamını Oku",
      },
      blog: {
        title: "Son Yazılar",
        subtitle: "Sanat, süreç ve ilham üzerine düşünceler",
        readMore: "Devamını Oku",
        viewAll: "Tüm Yazılar",
      },
    },
    about: {
      hero: {
        title: "Sanatsal Yolculuğum",
        subtitle: "Hayal ile Gerçek Arasında",
        description:
          "Çalışmalarımda gerçeklikten hayal gücüne kaçmaya çalışıyorum. Bu, çağdaş dünyaya referanslarla farklı zamanlarda hikaye aracılığıyla buluşuyor.",
      },
      journey: {
        title: "Eğitim & Deneyim",
        subtitle: "Sanatsal gelişimimin kilometre taşları",
      },
      skills: {
        title: "Uzmanlık Alanları",
        subtitle: "Çalıştığım medyalar ve teknikler",
      },
      stats: {
        projects: "Proje",
        experience: "Yıl Deneyim",
        exhibitions: "Sergi",
        awards: "Ödül",
      },
      contact: {
        title: "İşbirliği",
        email: "E-posta",
        collaboration: "Projeler ve işbirlikleri için benimle iletişime geçin",
      },
    },
    gallery: {
      title: "Galeri",
      subtitle: "Sanatsal çalışmalarımın koleksiyonu",
      filters: {
        all: "Tümü",
        digital: "Dijital Sanat",
        photography: "Fotoğraf",
        mixed: "Karma Teknik",
      },
      loading: "Yükleniyor...",
      noResults: "Sonuç bulunamadı",
    },
    blog: {
      title: "Blog",
      subtitle: "Sanat, süreç ve ilham üzerine yazılar",
      search: "Ara",
      searchPlaceholder: "Yazılarda ara...",
      categories: {
        all: "Tümü",
        art: "Sanat",
        process: "Süreç",
        inspiration: "İlham",
        exhibitions: "Sergiler",
      },
      readMore: "Devamını Oku",
      loading: "Yükleniyor...",
      noResults: "Yazı bulunamadı",
    },
    contact: {
      title: "İletişim",
      subtitle: "Projeler ve işbirlikleri için benimle iletişime geçin",
      form: {
        name: "Ad Soyad",
        email: "E-posta",
        subject: "Konu",
        message: "Mesaj",
        send: "Gönder",
        sending: "Gönderiliyor...",
        success: "Mesajınız başarıyla gönderildi!",
        error: "Mesaj gönderilirken hata oluştu.",
      },
      info: {
        email: "E-posta",
        location: "Konum",
        availability: "Müsaitlik",
      },
    },
    admin: {
      title: "Yönetim Paneli",
      login: {
        title: "Giriş Yap",
        email: "E-posta",
        password: "Şifre",
        login: "Giriş Yap",
        error: "Giriş bilgileri hatalı",
      },
      dashboard: {
        title: "Kontrol Paneli",
        overview: "Genel Bakış",
        artworks: "Sanat Eserleri",
        blogPosts: "Blog Yazıları",
        messages: "Mesajlar",
        totalArtworks: "Toplam Eser",
        totalPosts: "Toplam Yazı",
        totalMessages: "Toplam Mesaj",
        recentActivity: "Son Aktiviteler",
      },
      artworks: {
        title: "Sanat Eserleri",
        add: "Yeni Eser Ekle",
        edit: "Düzenle",
        delete: "Sil",
        title_field: "Başlık",
        description: "Açıklama",
        category: "Kategori",
        image: "Görsel",
        save: "Kaydet",
        cancel: "İptal",
      },
      blog: {
        title: "Blog Yazıları",
        add: "Yeni Yazı Ekle",
        edit: "Düzenle",
        delete: "Sil",
        title_field: "Başlık",
        content: "İçerik",
        category: "Kategori",
        image: "Görsel",
        published: "Yayınlandı",
        save: "Kaydet",
        cancel: "İptal",
      },
      messages: {
        title: "Mesajlar",
        from: "Gönderen",
        subject: "Konu",
        date: "Tarih",
        read: "Okundu",
        unread: "Okunmadı",
        reply: "Yanıtla",
        delete: "Sil",
      },
    },
    common: {
      loading: "Yükleniyor...",
      error: "Hata oluştu",
      success: "Başarılı",
      cancel: "İptal",
      save: "Kaydet",
      delete: "Sil",
      edit: "Düzenle",
      view: "Görüntüle",
      back: "Geri",
      next: "İleri",
      previous: "Önceki",
      close: "Kapat",
      search: "Ara",
      filter: "Filtrele",
      sort: "Sırala",
      date: "Tarih",
      category: "Kategori",
      tags: "Etiketler",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      gallery: "Gallery",
      blog: "Blog",
      contact: "Contact",
      cv: "CV",
      admin: "Admin",
    },
    home: {
      hero: {
        title: "Explore the Boundaries of Imagination",
        subtitle: "Contemporary Art & Visual Stories",
        description:
          "Discover my works that escape from reality into imagination, woven with mysterious atmospheres and symbolic meanings.",
        cta: "Explore My Work",
      },
      featured: {
        title: "Featured Works",
        subtitle: "Selected pieces from my latest projects",
        viewAll: "View All",
      },
      about: {
        title: "About the Artist",
        subtitle: "My creative process and artistic vision",
        readMore: "Read More",
      },
      blog: {
        title: "Latest Posts",
        subtitle: "Thoughts on art, process and inspiration",
        readMore: "Read More",
        viewAll: "All Posts",
      },
    },
    about: {
      hero: {
        title: "My Artistic Journey",
        subtitle: "Between Imagination and Reality",
        description:
          "In my work, I try to escape reality into imagination, which meets through the story at different times with references to the contemporary world.",
      },
      journey: {
        title: "Education & Experience",
        subtitle: "Milestones of my artistic development",
      },
      skills: {
        title: "Areas of Expertise",
        subtitle: "Media and techniques I work with",
      },
      stats: {
        projects: "Projects",
        experience: "Years Experience",
        exhibitions: "Exhibitions",
        awards: "Awards",
      },
      contact: {
        title: "Collaboration",
        email: "Email",
        collaboration: "Get in touch for projects and collaborations",
      },
    },
    gallery: {
      title: "Gallery",
      subtitle: "Collection of my artistic works",
      filters: {
        all: "All",
        digital: "Digital Art",
        photography: "Photography",
        mixed: "Mixed Media",
      },
      loading: "Loading...",
      noResults: "No results found",
    },
    blog: {
      title: "Blog",
      subtitle: "Articles on art, process and inspiration",
      search: "Search",
      searchPlaceholder: "Search articles...",
      categories: {
        all: "All",
        art: "Art",
        process: "Process",
        inspiration: "Inspiration",
        exhibitions: "Exhibitions",
      },
      readMore: "Read More",
      loading: "Loading...",
      noResults: "No articles found",
    },
    contact: {
      title: "Contact",
      subtitle: "Get in touch for projects and collaborations",
      form: {
        name: "Full Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send",
        sending: "Sending...",
        success: "Your message has been sent successfully!",
        error: "Error sending message.",
      },
      info: {
        email: "Email",
        location: "Location",
        availability: "Availability",
      },
    },
    admin: {
      title: "Admin Panel",
      login: {
        title: "Login",
        email: "Email",
        password: "Password",
        login: "Login",
        error: "Invalid credentials",
      },
      dashboard: {
        title: "Dashboard",
        overview: "Overview",
        artworks: "Artworks",
        blogPosts: "Blog Posts",
        messages: "Messages",
        totalArtworks: "Total Artworks",
        totalPosts: "Total Posts",
        totalMessages: "Total Messages",
        recentActivity: "Recent Activity",
      },
      artworks: {
        title: "Artworks",
        add: "Add New Artwork",
        edit: "Edit",
        delete: "Delete",
        title_field: "Title",
        description: "Description",
        category: "Category",
        image: "Image",
        save: "Save",
        cancel: "Cancel",
      },
      blog: {
        title: "Blog Posts",
        add: "Add New Post",
        edit: "Edit",
        delete: "Delete",
        title_field: "Title",
        content: "Content",
        category: "Category",
        image: "Image",
        published: "Published",
        save: "Save",
        cancel: "Cancel",
      },
      messages: {
        title: "Messages",
        from: "From",
        subject: "Subject",
        date: "Date",
        read: "Read",
        unread: "Unread",
        reply: "Reply",
        delete: "Delete",
      },
    },
    common: {
      loading: "Loading...",
      error: "An error occurred",
      success: "Success",
      cancel: "Cancel",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
      view: "View",
      back: "Back",
      next: "Next",
      previous: "Previous",
      close: "Close",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      date: "Date",
      category: "Category",
      tags: "Tags",
    },
  },
  cs: {
    nav: {
      home: "Domů",
      about: "O mně",
      gallery: "Galerie",
      blog: "Blog",
      contact: "Kontakt",
      cv: "CV",
      admin: "Admin",
    },
    home: {
      hero: {
        title: "Prozkoumejte hranice představivosti",
        subtitle: "Současné umění a vizuální příběhy",
        description:
          "Objevte má díla, která unikají z reality do představivosti, proplétaná tajemnými atmosférami a symbolickými významy.",
        cta: "Prozkoumat díla",
      },
      featured: {
        title: "Vybraná díla",
        subtitle: "Výběr z mých nejnovějších projektů",
        viewAll: "Zobrazit vše",
      },
      about: {
        title: "O umělci",
        subtitle: "Můj tvůrčí proces a umělecká vize",
        readMore: "Číst více",
      },
      blog: {
        title: "Nejnovější příspěvky",
        subtitle: "Myšlenky o umění, procesu a inspiraci",
        readMore: "Číst více",
        viewAll: "Všechny příspěvky",
      },
    },
    about: {
      hero: {
        title: "Má umělecká cesta",
        subtitle: "Mezi představivostí a realitou",
        description:
          "Ve své práci se snažím uniknout z reality do představivosti, která se prostřednictvím příběhu v různých časech setkává s odkazy na současný svět.",
      },
      journey: {
        title: "Vzdělání a zkušenosti",
        subtitle: "Milníky mého uměleckého vývoje",
      },
      skills: {
        title: "Oblasti odbornosti",
        subtitle: "Média a techniky, se kterými pracuji",
      },
      stats: {
        projects: "Projekty",
        experience: "Let zkušeností",
        exhibitions: "Výstavy",
        awards: "Ocenění",
      },
      contact: {
        title: "Spolupráce",
        email: "Email",
        collaboration: "Kontaktujte mě pro projekty a spolupráci",
      },
    },
    gallery: {
      title: "Galerie",
      subtitle: "Kolekce mých uměleckých děl",
      filters: {
        all: "Vše",
        digital: "Digitální umění",
        photography: "Fotografie",
        mixed: "Smíšená média",
      },
      loading: "Načítání...",
      noResults: "Žádné výsledky",
    },
    blog: {
      title: "Blog",
      subtitle: "Články o umění, procesu a inspiraci",
      search: "Hledat",
      searchPlaceholder: "Hledat články...",
      categories: {
        all: "Vše",
        art: "Umění",
        process: "Proces",
        inspiration: "Inspirace",
        exhibitions: "Výstavy",
      },
      readMore: "Číst více",
      loading: "Načítání...",
      noResults: "Žádné články nenalezeny",
    },
    contact: {
      title: "Kontakt",
      subtitle: "Kontaktujte mě pro projekty a spolupráci",
      form: {
        name: "Celé jméno",
        email: "Email",
        subject: "Předmět",
        message: "Zpráva",
        send: "Odeslat",
        sending: "Odesílání...",
        success: "Vaše zpráva byla úspěšně odeslána!",
        error: "Chyba při odesílání zprávy.",
      },
      info: {
        email: "Email",
        location: "Umístění",
        availability: "Dostupnost",
      },
    },
    admin: {
      title: "Administrační panel",
      login: {
        title: "Přihlášení",
        email: "Email",
        password: "Heslo",
        login: "Přihlásit se",
        error: "Neplatné přihlašovací údaje",
      },
      dashboard: {
        title: "Nástěnka",
        overview: "Přehled",
        artworks: "Umělecká díla",
        blogPosts: "Blogové příspěvky",
        messages: "Zprávy",
        totalArtworks: "Celkem děl",
        totalPosts: "Celkem příspěvků",
        totalMessages: "Celkem zpráv",
        recentActivity: "Nedávná aktivita",
      },
      artworks: {
        title: "Umělecká díla",
        add: "Přidat nové dílo",
        edit: "Upravit",
        delete: "Smazat",
        title_field: "Název",
        description: "Popis",
        category: "Kategorie",
        image: "Obrázek",
        save: "Uložit",
        cancel: "Zrušit",
      },
      blog: {
        title: "Blogové příspěvky",
        add: "Přidat nový příspěvek",
        edit: "Upravit",
        delete: "Smazat",
        title_field: "Název",
        content: "Obsah",
        category: "Kategorie",
        image: "Obrázek",
        published: "Publikováno",
        save: "Uložit",
        cancel: "Zrušit",
      },
      messages: {
        title: "Zprávy",
        from: "Od",
        subject: "Předmět",
        date: "Datum",
        read: "Přečteno",
        unread: "Nepřečteno",
        reply: "Odpovědět",
        delete: "Smazat",
      },
    },
    common: {
      loading: "Načítání...",
      error: "Došlo k chybě",
      success: "Úspěch",
      cancel: "Zrušit",
      save: "Uložit",
      delete: "Smazat",
      edit: "Upravit",
      view: "Zobrazit",
      back: "Zpět",
      next: "Další",
      previous: "Předchozí",
      close: "Zavřít",
      search: "Hledat",
      filter: "Filtrovat",
      sort: "Seřadit",
      date: "Datum",
      category: "Kategorie",
      tags: "Štítky",
    },
  },
}
