-- Seeding multilingual blog data

-- Insert categories
INSERT INTO categories (id, slug, color) VALUES
(1, 'digital-art', '#8B5CF6'),
(2, 'photography', '#10B981'),
(3, 'painting', '#F59E0B'),
(4, 'sculpture', '#EF4444'),
(5, 'mixed-media', '#6366F1')
ON CONFLICT (id) DO NOTHING;

-- Insert category translations
INSERT INTO category_translations (category_id, language_code, name, description) VALUES
-- Digital Art
(1, 'tr', 'Dijital Sanat', 'Modern dijital araçlarla yaratılan sanat eserleri'),
(1, 'en', 'Digital Art', 'Artworks created using modern digital tools'),
(1, 'cs', 'Digitální Umění', 'Umělecká díla vytvořená pomocí moderních digitálních nástrojů'),

-- Photography
(2, 'tr', 'Fotoğrafçılık', 'Görsel hikaye anlatımı ve fotoğraf sanatı'),
(2, 'en', 'Photography', 'Visual storytelling and photographic art'),
(2, 'cs', 'Fotografie', 'Vizuální vyprávění a fotografické umění'),

-- Painting
(3, 'tr', 'Resim', 'Geleneksel ve çağdaş resim teknikleri'),
(3, 'en', 'Painting', 'Traditional and contemporary painting techniques'),
(3, 'cs', 'Malba', 'Tradiční a současné malířské techniky'),

-- Sculpture
(4, 'tr', 'Heykel', 'Üç boyutlu sanat eserleri ve enstalasyonlar'),
(4, 'en', 'Sculpture', 'Three-dimensional artworks and installations'),
(4, 'cs', 'Sochařství', 'Trojrozměrná umělecká díla a instalace'),

-- Mixed Media
(5, 'tr', 'Karma Teknik', 'Farklı medyumların birleştirildiği sanat'),
(5, 'en', 'Mixed Media', 'Art combining different mediums and techniques'),
(5, 'cs', 'Smíšená Média', 'Umění kombinující různá média a techniky')
ON CONFLICT (category_id, language_code) DO NOTHING;

-- Insert blog posts
INSERT INTO blog_posts (id, slug, category_id, image_url, published, featured) VALUES
(1, 'digital-art-future', 1, 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop', true, true),
(2, 'color-theory-guide', 3, 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop', true, false),
(3, 'photography-composition', 2, 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop', true, true),
(4, 'sculpture-techniques', 4, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop', true, false),
(5, 'mixed-media-exploration', 5, 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop', true, false)
ON CONFLICT (id) DO NOTHING;

-- Insert blog post translations
INSERT INTO blog_post_translations (blog_post_id, language_code, title, excerpt, content, meta_description) VALUES
-- Digital Art Future - Turkish
(1, 'tr', 'Dijital Sanatın Geleceği', 'Teknoloji ve sanatın buluştuğu noktada yeni ifade biçimleri keşfediyoruz.', 
'Dijital sanat, geleneksel sanat formlarını teknoloji ile harmanlayarak yeni ifade biçimleri yaratıyor. Bu yazıda, dijital sanatın geleceğini ve sanatçılar için sunduğu olanakları inceliyoruz.

Yapay zeka, sanal gerçeklik ve artırılmış gerçeklik gibi teknolojiler, sanatçılara daha önce hiç olmadığı kadar geniş bir yaratım alanı sunuyor. Bu teknolojiler sayesinde, hayal gücümüzün sınırlarını zorlayan eserler yaratabiliyoruz.

Dijital sanatın en büyük avantajlarından biri, sınırsız deneme yanılma imkanı sunması. Geleneksel malzemelerle çalışırken karşılaştığımız fiziksel kısıtlamalar, dijital ortamda ortadan kalkıyor.', 
'Dijital sanatın geleceği ve teknolojinin sanat üzerindeki etkisi'),

-- Digital Art Future - English
(1, 'en', 'The Future of Digital Art', 'Exploring new forms of expression where technology meets art.', 
'Digital art is creating new forms of expression by blending traditional art forms with technology. In this article, we explore the future of digital art and the opportunities it offers to artists.

Technologies like artificial intelligence, virtual reality, and augmented reality provide artists with a broader creative space than ever before. Through these technologies, we can create works that push the boundaries of our imagination.

One of the greatest advantages of digital art is the unlimited opportunity for experimentation. The physical constraints we face when working with traditional materials disappear in the digital environment.', 
'The future of digital art and the impact of technology on art'),

-- Digital Art Future - Czech
(1, 'cs', 'Budoucnost Digitálního Umění', 'Zkoumáme nové formy vyjádření, kde se setkává technologie s uměním.', 
'Digitální umění vytváří nové formy vyjádření spojením tradičních uměleckých forem s technologií. V tomto článku zkoumáme budoucnost digitálního umění a příležitosti, které nabízí umělcům.

Technologie jako umělá inteligence, virtuální realita a rozšířená realita poskytují umělcům širší tvůrčí prostor než kdy dříve. Prostřednictvím těchto technologií můžeme vytvářet díla, která posouvají hranice naší představivosti.

Jednou z největších výhod digitálního umění je neomezená příležitost k experimentování. Fyzická omezení, se kterými se setkáváme při práci s tradičními materiály, v digitálním prostředí mizí.', 
'Budoucnost digitálního umění a dopad technologie na umění'),

-- Color Theory Guide - Turkish
(2, 'tr', 'Renk Teorisi Rehberi', 'Sanatınızda renkleri etkili kullanmanın temel prensipleri.', 
'Renk teorisi, her sanatçının bilmesi gereken temel konulardan biridir. Bu rehberde, renklerin psikolojik etkilerini ve sanatsal kompozisyonlarda nasıl kullanılacağını öğreneceksiniz.

Renk çemberi, birincil, ikincil ve üçüncül renklerin düzenlenişini gösterir. Bu düzenleme, uyumlu renk paletleri oluşturmak için temel bir araçtır.

Sıcak ve soğuk renkler, eserinizde farklı duygular uyandırabilir. Sıcak renkler enerji ve heyecan verirken, soğuk renkler sakinlik ve huzur hissi yaratır.', 
'Renk teorisi ve sanatsal kompozisyonda renk kullanımı'),

-- Color Theory Guide - English
(2, 'en', 'Color Theory Guide', 'Essential principles for using colors effectively in your art.', 
'Color theory is one of the fundamental topics every artist should know. In this guide, you will learn about the psychological effects of colors and how to use them in artistic compositions.

The color wheel shows the arrangement of primary, secondary, and tertiary colors. This arrangement is a fundamental tool for creating harmonious color palettes.

Warm and cool colors can evoke different emotions in your work. Warm colors provide energy and excitement, while cool colors create feelings of calm and peace.', 
'Color theory and color usage in artistic composition'),

-- Color Theory Guide - Czech
(2, 'cs', 'Průvodce Teorií Barev', 'Základní principy efektivního používání barev ve vašem umění.', 
'Teorie barev je jedním ze základních témat, které by měl znát každý umělec. V tomto průvodci se dozvíte o psychologických účincích barev a jak je používat v uměleckých kompozicích.

Barevný kruh ukazuje uspořádání primárních, sekundárních a terciárních barev. Toto uspořádání je základním nástrojem pro vytváření harmonických barevných palet.

Teplé a studené barvy mohou ve vašem díle vyvolat různé emoce. Teplé barvy poskytují energii a vzrušení, zatímco studené barvy vytvářejí pocity klidu a míru.', 
'Teorie barev a použití barev v umělecké kompozici')

ON CONFLICT (blog_post_id, language_code) DO NOTHING;
