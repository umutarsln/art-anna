-- Insert sample artworks into sanat_artworks
INSERT INTO sanat_artworks (title, description, category, image_url, featured) VALUES
('Dijital Portre Serisi #1', 'Modern dijital tekniklerle oluşturulmuş portre çalışması', 'digital', '/placeholder.svg?height=600&width=600', true),
('Şehir Manzarası', 'Gece şehrinin büyüleyici ışıkları', 'photography', '/placeholder.svg?height=600&width=600', true),
('Soyut Kompozisyon', 'Renk ve formun dans ettiği soyut eser', 'digital', '/placeholder.svg?height=600&width=600', false),
('Doğa Fotoğrafı', 'Doğanın sakin güzelliğinden bir kare', 'photography', '/placeholder.svg?height=600&width=600', false),
('Karakter Tasarımı', 'Fantastik karakter konsept çalışması', 'digital', '/placeholder.svg?height=600&width=600', true),
('Mimari Fotoğraf', 'Modern mimarinin geometrik güzelliği', 'photography', '/placeholder.svg?height=600&width=600', false);

-- Insert sample blog posts into sanat_blog_posts
INSERT INTO sanat_blog_posts (title, slug, content, excerpt, image_url, published, published_at) VALUES
('Dijital Sanatın Geleceği', 'dijital-sanatin-gelecegi', 
'Dijital sanat dünyası hızla gelişiyor. AI araçları, VR teknolojileri ve yeni yazılımlar sanatçılara daha önce hiç olmadığı kadar geniş imkanlar sunuyor. Bu yazıda, teknolojinin sanat dünyasına etkilerini ve gelecekte bizi bekleyen yenilikleri keşfediyoruz.

## AI ve Sanat

Yapay zeka araçları, sanatçıların yaratıcı süreçlerini desteklemekte ve yeni ifade biçimleri sunmaktadır. Midjourney, DALL-E gibi araçlar, sanatçıların hayal güçlerini genişletmekte ve daha önce mümkün olmayan kompozisyonlar yaratmalarına olanak sağlamaktadır.

## Sanal Gerçeklik ve Sanat

VR teknolojisi, sanat eserlerinin deneyimlenme biçimini tamamen değiştirmektedir. Artık izleyiciler, sanat eserlerinin içine girebilmekte ve üç boyutlu deneyimler yaşayabilmektedir.', 
'AI ve dijital araçların sanat dünyasına etkilerini keşfediyoruz...', 
'/placeholder.svg?height=400&width=600', 
true, NOW() - INTERVAL '5 days'),

('Renk Teorisi ve Kompozisyon', 'renk-teorisi-kompozisyon',
'Etkili bir sanat eseri oluşturmak için renk teorisinin temellerini bilmek çok önemli. Bu yazıda renklerin psikolojik etkilerini ve kompozisyonda nasıl kullanılacağını inceliyoruz.

## Renk Çemberi

Renk çemberi, renklerin birbirleriyle olan ilişkilerini gösteren temel bir araçtır. Birincil, ikincil ve üçüncül renkler arasındaki harmonik ilişkiler, güçlü kompozisyonlar yaratmanın anahtarıdır.

## Sıcak ve Soğuk Renkler

Sıcak renkler (kırmızı, turuncu, sarı) enerji ve hareket hissi verirken, soğuk renkler (mavi, yeşil, mor) sakinlik ve derinlik yaratır.',
'Etkili kompozisyon oluşturmak için renk teorisinin temellerini öğrenin...',
'/placeholder.svg?height=400&width=600',
true, NOW() - INTERVAL '10 days'),

('Fotoğrafta Işık Kullanımı', 'fotografta-isik-kullanimi',
'Fotoğrafçılıkta ışık her şeydir. Doğal ışığı etkili kullanmak ve yapay ışık kaynaklarıyla yaratıcı sonuçlar elde etmek için pratik ipuçları.

## Doğal Işık

Güneş ışığının farklı saatlerdeki kalitesi, fotoğraflarınızın atmosferini belirler. Altın saat ve mavi saat gibi özel zamanlar, büyüleyici sonuçlar verir.

## Yapay Işık Teknikleri

Stüdyo ışıklandırması, softbox kullanımı ve gölge oyunları ile profesyonel sonuçlar elde edebilirsiniz.',
'Doğal ve yapay ışığı kullanarak etkileyici fotoğraflar çekme teknikleri...',
'/placeholder.svg?height=400&width=600',
true, NOW() - INTERVAL '15 days');
