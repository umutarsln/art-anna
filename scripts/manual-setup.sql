-- Bu komutları Supabase Dashboard'da SQL Editor'de manuel olarak çalıştırın

-- 1. sanat_artworks tablosunu oluştur
CREATE TABLE IF NOT EXISTS sanat_artworks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50) NOT NULL CHECK (category IN ('digital', 'photography')),
  image_url TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. sanat_blog_posts tablosunu oluştur
CREATE TABLE IF NOT EXISTS sanat_blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  image_url TEXT,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. sanat_contact_messages tablosunu oluştur
CREATE TABLE IF NOT EXISTS sanat_contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. İndeksleri oluştur
CREATE INDEX IF NOT EXISTS idx_sanat_artworks_category ON sanat_artworks(category);
CREATE INDEX IF NOT EXISTS idx_sanat_artworks_featured ON sanat_artworks(featured);
CREATE INDEX IF NOT EXISTS idx_sanat_artworks_created_at ON sanat_artworks(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sanat_blog_posts_published ON sanat_blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_sanat_blog_posts_published_at ON sanat_blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_sanat_contact_messages_created_at ON sanat_contact_messages(created_at DESC);

-- 5. Örnek veri ekle
INSERT INTO sanat_artworks (title, description, category, image_url, featured) VALUES
('Dijital Portre Serisi #1', 'Modern dijital tekniklerle oluşturulmuş portre çalışması', 'digital', '/placeholder.svg?height=600&width=600&text=Digital+Portrait', true),
('Şehir Manzarası', 'Gece şehrinin büyüleyici ışıkları', 'photography', '/placeholder.svg?height=600&width=600&text=City+Landscape', true),
('Soyut Kompozisyon', 'Renk ve formun dans ettiği soyut eser', 'digital', '/placeholder.svg?height=600&width=600&text=Abstract+Art', false),
('Doğa Fotoğrafı', 'Doğanın sakin güzelliğinden bir kare', 'photography', '/placeholder.svg?height=600&width=600&text=Nature+Photo', false),
('Karakter Tasarımı', 'Fantastik karakter konsept çalışması', 'digital', '/placeholder.svg?height=600&width=600&text=Character+Design', true),
('Mimari Fotoğraf', 'Modern mimarinin geometrik güzelliği', 'photography', '/placeholder.svg?height=600&width=600&text=Architecture', false);

INSERT INTO sanat_blog_posts (title, slug, content, excerpt, image_url, published, published_at) VALUES
('Dijital Sanatın Geleceği', 'dijital-sanatin-gelecegi', 
'# Dijital Sanatın Geleceği

Dijital sanat dünyası hızla gelişiyor. AI araçları, VR teknolojileri ve yeni yazılımlar sanatçılara daha önce hiç olmadığı kadar geniş imkanlar sunuyor.

## AI ve Sanat

Yapay zeka araçları, sanatçıların yaratıcı süreçlerini desteklemekte ve yeni ifade biçimleri sunmaktadır.', 
'AI ve dijital araçların sanat dünyasına etkilerini keşfediyoruz...', 
'/placeholder.svg?height=400&width=600&text=Digital+Art+Future', 
true, NOW() - INTERVAL ''5 days''),

('Renk Teorisi ve Kompozisyon', 'renk-teorisi-kompozisyon',
'# Renk Teorisi ve Kompozisyon

Etkili bir sanat eseri oluşturmak için renk teorisinin temellerini bilmek çok önemli.

## Renk Çemberi

Renk çemberi, renklerin birbirleriyle olan ilişkilerini gösteren temel bir araçtır.',
'Etkili kompozisyon oluşturmak için renk teorisinin temellerini öğrenin...',
'/placeholder.svg?height=400&width=600&text=Color+Theory',
true, NOW() - INTERVAL ''10 days''),

('Fotoğrafta Işık Kullanımı', 'fotografta-isik-kullanimi',
'# Fotoğrafta Işık Kullanımı

Fotoğrafçılıkta ışık her şeydir. Doğal ışığı etkili kullanmak ve yapay ışık kaynaklarıyla yaratıcı sonuçlar elde etmek için pratik ipuçları.

## Doğal Işık

Güneş ışığının farklı saatlerdeki kalitesi, fotoğraflarınızın atmosferini belirler.',
'Doğal ve yapay ışığı kullanarak etkileyici fotoğraflar çekme teknikleri...',
'/placeholder.svg?height=400&width=600&text=Photography+Light',
true, NOW() - INTERVAL ''15 days'');
