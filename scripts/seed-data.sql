-- Insert sample artworks
INSERT INTO artworks (title, description, category, image_url, featured) VALUES
('Dijital Portre Serisi #1', 'Modern dijital tekniklerle oluşturulmuş portre çalışması', 'digital', '/placeholder.svg?height=600&width=600', true),
('Şehir Manzarası', 'Gece şehrinin büyüleyici ışıkları', 'photography', '/placeholder.svg?height=600&width=600', true),
('Soyut Kompozisyon', 'Renk ve formun dans ettiği soyut eser', 'digital', '/placeholder.svg?height=600&width=600', false),
('Doğa Fotoğrafı', 'Doğanın sakin güzelliğinden bir kare', 'photography', '/placeholder.svg?height=600&width=600', false),
('Karakter Tasarımı', 'Fantastik karakter konsept çalışması', 'digital', '/placeholder.svg?height=600&width=600', true),
('Mimari Fotoğraf', 'Modern mimarinin geometrik güzelliği', 'photography', '/placeholder.svg?height=600&width=600', false);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, content, excerpt, image_url, published, published_at) VALUES
('Dijital Sanatın Geleceği', 'dijital-sanatin-gelecegi', 
'Dijital sanat dünyası hızla gelişiyor. AI araçları, VR teknolojileri ve yeni yazılımlar sanatçılara daha önce hiç olmadığı kadar geniş imkanlar sunuyor...', 
'AI ve dijital araçların sanat dünyasına etkilerini keşfediyoruz...', 
'/placeholder.svg?height=400&width=600', 
true, NOW() - INTERVAL '5 days'),

('Renk Teorisi ve Kompozisyon', 'renk-teorisi-kompozisyon',
'Etkili bir sanat eseri oluşturmak için renk teorisinin temellerini bilmek çok önemli. Bu yazıda renklerin psikolojik etkilerini ve kompozisyonda nasıl kullanılacağını inceliyoruz...',
'Etkili kompozisyon oluşturmak için renk teorisinin temellerini öğrenin...',
'/placeholder.svg?height=400&width=600',
true, NOW() - INTERVAL '10 days'),

('Fotoğrafta Işık Kullanımı', 'fotografta-isik-kullanimi',
'Fotoğrafçılıkta ışık her şeydir. Doğal ışığı etkili kullanmak ve yapay ışık kaynaklarıyla yaratıcı sonuçlar elde etmek için pratik ipuçları...',
'Doğal ve yapay ışığı kullanarak etkileyici fotoğraflar çekme teknikleri...',
'/placeholder.svg?height=400&width=600',
true, NOW() - INTERVAL '15 days');
