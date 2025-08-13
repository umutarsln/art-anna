-- Sanat eserleri örnek verileri
INSERT INTO sanat_artworks (title, description, category, image_url, featured, status) VALUES
('Dijital Portre Serisi #1', 'Modern dijital tekniklerle oluşturulmuş portre çalışması. Bu eser, insan yüzünün dijital sanat ile ifade edilmesini keşfediyor.', 'digital', '/images/digital-portrait-1.png', true, 'published'),
('Şehir Manzarası', 'Gece şehrinin büyüleyici ışıkları. İstanbul''un gece görünümünü yakalayan bu fotoğraf, şehrin ruhunu yansıtıyor.', 'photography', '/images/city-landscape.png', true, 'published'),
('Soyut Kompozisyon', 'Renk ve formun dans ettiği soyut eser. Geometrik şekiller ve canlı renklerle oluşturulmuş bu çalışma, izleyiciyi düşünmeye davet ediyor.', 'digital', '/images/abstract-composition.png', false, 'published'),
('Doğa Fotoğrafı', 'Doğanın sakin güzelliğinden bir kare. Sabah ışığında çekilmiş bu fotoğraf, doğanın huzur verici etkisini yansıtıyor.', 'photography', '/images/nature-photo.png', false, 'published'),
('Karakter Tasarımı', 'Fantastik karakter konsept çalışması. Oyun ve film endüstrisi için tasarlanmış özgün karakter konsepti.', 'digital', '/images/character-design.png', true, 'published'),
('Mimari Fotoğraf', 'Modern mimarinin geometrik güzelliği. Çağdaş binaların form ve işlevini vurgulayan mimari fotoğraf çalışması.', 'photography', '/images/architecture-photo.png', false, 'published'),
('Dijital İllüstrasyon', 'Renkli ve dinamik dijital illüstrasyon çalışması. Pop art etkilerini modern dijital tekniklerle harmanlayan eser.', 'digital', '/images/digital-illustration.png', false, 'published'),
('Portre Fotoğrafı', 'Doğal ışıkta çekilmiş portre fotoğrafı. İnsan duygularını ve karakterini yansıtan güçlü bir portre çalışması.', 'photography', '/images/portrait-photo.png', false, 'published');

-- Blog yazıları örnek verileri
INSERT INTO sanat_blog_posts (title, slug, content, excerpt, image_url, published, status, published_at) VALUES
('Dijital Sanatın Geleceği', 'dijital-sanatin-gelecegi', 
'# Dijital Sanatın Geleceği

Dijital sanat dünyası hızla gelişiyor. AI araçları, VR teknolojileri ve yeni yazılımlar sanatçılara daha önce hiç olmadığı kadar geniş imkanlar sunuyor. Bu yazıda, teknolojinin sanat dünyasına etkilerini ve gelecekte bizi bekleyen yenilikleri keşfediyoruz.

## AI ve Sanat

Yapay zeka araçları, sanatçıların yaratıcı süreçlerini desteklemekte ve yeni ifade biçimleri sunmaktadır. Midjourney, DALL-E gibi araçlar, sanatçıların hayal güçlerini genişletmekte ve daha önce mümkün olmayan kompozisyonlar yaratmalarına olanak sağlamaktadır.

### AI Araçlarının Avantajları

- Hızlı konsept geliştirme
- Sınırsız varyasyon imkanı
- Yaratıcı blokajları aşma
- Yeni stil keşifleri

## Sanal Gerçeklik ve Sanat

VR teknolojisi, sanat eserlerinin deneyimlenme biçimini tamamen değiştirmektedir. Artık izleyiciler, sanat eserlerinin içine girebilmekte ve üç boyutlu deneyimler yaşayabilmektedir.

### VR Sanatının Özellikleri

1. **İmmersif Deneyim**: Tamamen sarmalayıcı sanat deneyimi
2. **Etkileşimli Öğeler**: İzleyicinin esere müdahale edebilmesi
3. **Sınırsız Mekan**: Fiziksel kısıtlamaların ortadan kalkması
4. **Çok Duyusal Deneyim**: Görsel, işitsel ve haptik geri bildirim

## Blockchain ve NFT''ler

Blockchain teknolojisi, dijital sanat eserlerinin sahipliği ve ticareti konusunda devrim yaratmıştır. NFT''ler sayesinde dijital eserler benzersiz hale gelmiş ve koleksiyonerlerin ilgisini çekmiştir.

## Gelecekte Bizi Bekleyen Yenilikler

- **Holografik Sanat**: Üç boyutlu hologram teknolojisi
- **Beyin-Bilgisayar Arayüzleri**: Düşünce ile sanat yaratma
- **Quantum Computing**: Karmaşık hesaplamalar ile yeni sanat formları
- **Metaverse Galerileri**: Sanal dünyalarda sanat sergileri

## Sonuç

Dijital sanatın geleceği parlak görünüyor. Teknolojinin sunduğu imkanlar, sanatçıların yaratıcılıklarını sınırsızca ifade etmelerine olanak sağlıyor. Önemli olan, bu araçları sanatsal vizyonumuza hizmet edecek şekilde kullanmaktır.', 
'AI ve dijital araçların sanat dünyasına etkilerini keşfediyoruz. Teknolojinin sanatçılara sunduğu yeni imkanlar ve gelecekte bizi bekleyen yenilikler...', 
'/images/blog-digital-art-future.png', 
true, 'published', NOW() - INTERVAL ''5 days''),

('Renk Teorisi ve Kompozisyon', 'renk-teorisi-kompozisyon',
'# Renk Teorisi ve Kompozisyon

Etkili bir sanat eseri oluşturmak için renk teorisinin temellerini bilmek çok önemli. Bu yazıda renklerin psikolojik etkilerini ve kompozisyonda nasıl kullanılacağını inceliyoruz.

## Renk Çemberi

Renk çemberi, renklerin birbirleriyle olan ilişkilerini gösteren temel bir araçtır. Birincil, ikincil ve üçüncül renkler arasındaki harmonik ilişkiler, güçlü kompozisyonlar yaratmanın anahtarıdır.

### Birincil Renkler
- **Kırmızı**: Enerji, tutku, güç
- **Mavi**: Sakinlik, güven, profesyonellik
- **Sarı**: Neşe, yaratıcılık, iyimserlik

### İkincil Renkler
- **Turuncu**: Kırmızı + Sarı = Sıcaklık, coşku
- **Yeşil**: Mavi + Sarı = Doğa, büyüme, denge
- **Mor**: Kırmızı + Mavi = Lüks, gizem, yaratıcılık

## Sıcak ve Soğuk Renkler

Sıcak renkler (kırmızı, turuncu, sarı) enerji ve hareket hissi verirken, soğuk renkler (mavi, yeşil, mor) sakinlik ve derinlik yaratır.

### Sıcak Renklerin Kullanımı
- Dikkat çekmek için
- Enerji ve dinamizm katmak için
- Yakınlık hissi yaratmak için

### Soğuk Renklerin Kullanımı
- Sakinlik vermek için
- Derinlik yaratmak için
- Profesyonel görünüm için

## Renk Harmonileri

### Tamamlayıcı Renkler
Renk çemberinde karşılıklı duran renkler güçlü kontrastlar yaratır.

### Analog Renkler
Renk çemberinde yan yana duran renkler uyumlu ve sakin kompozisyonlar oluşturur.

### Üçlü Harmoni
Renk çemberinde eşit mesafede duran üç renk dinamik ama dengeli kompozisyonlar yaratır.

## Kompozisyonda Renk Kullanımı

1. **Odak Noktası**: Parlak veya kontrastlı renkler dikkat çeker
2. **Denge**: Sıcak ve soğuk renklerin dengeli dağılımı
3. **Ritim**: Renklerin tekrarı görsel ritim yaratır
4. **Derinlik**: Sıcak renkler öne, soğuk renkler arkaya çekilir

## Pratik İpuçları

- %60-30-10 kuralını kullanın (ana renk, ikincil renk, vurgu rengi)
- Renk sıcaklığına dikkat edin
- Kontrast ile oynayın
- Renklerin kültürel anlamlarını göz önünde bulundurun

## Sonuç

Renk teorisi, güçlü ve etkili kompozisyonlar yaratmanın temelidir. Bu kuralları öğrenmek ve pratik yapmak, sanatsal ifade gücünüzü artıracaktır.',
'Etkili kompozisyon oluşturmak için renk teorisinin temellerini öğrenin. Renklerin psikolojik etkileri ve sanatsal kullanımı hakkında kapsamlı rehber...',
'/images/blog-color-theory.png',
true, 'published', NOW() - INTERVAL ''10 days''),

('Fotoğrafta Işık Kullanımı', 'fotografta-isik-kullanimi',
'# Fotoğrafta Işık Kullanımı

Fotoğrafçılıkta ışık her şeydir. Doğal ışığı etkili kullanmak ve yapay ışık kaynaklarıyla yaratıcı sonuçlar elde etmek için pratik ipuçları.

## Doğal Işık

Güneş ışığının farklı saatlerdeki kalitesi, fotoğraflarınızın atmosferini belirler. Altın saat ve mavi saat gibi özel zamanlar, büyüleyici sonuçlar verir.

### Altın Saat (Golden Hour)
Gün doğumundan sonraki ve gün batımından önceki bir saat:
- Yumuşak, sıcak ışık
- Uzun gölgeler
- Romantik atmosfer
- Portre fotoğrafçılığı için ideal

### Mavi Saat (Blue Hour)
Gün batımından sonraki 20-30 dakika:
- Mavi tonlarda gökyüzü
- Şehir ışıklarının görünmeye başladığı an
- Mimari fotoğrafçılık için mükemmel
- Dengeli pozlama imkanı

### Öğle Işığı
Sert ve dikey ışık:
- Güçlü kontrastlar
- Keskin gölgeler
- Siyah-beyaz fotoğrafçılık için uygun
- Dikkatli kullanım gerektirir

## Yapay Işık Teknikleri

### Stüdyo Işıklandırması

#### Ana Işık (Key Light)
- Öznenin ana aydınlatması
- Genellikle 45 derece açıyla yerleştirilir
- Işığın yoğunluğu ve yönü atmosferi belirler

#### Dolgu Işığı (Fill Light)
- Gölgeleri yumuşatır
- Ana ışığın yarısı kadar güçte olmalı
- Doğal görünüm için gerekli

#### Arka Işık (Back Light)
- Özneyi arka plandan ayırır
- Saç ve omuzlarda ışık halkası yaratır
- Derinlik hissi verir

### Softbox Kullanımı
- Işığı yumuşatır ve yayar
- Doğal pencere ışığını taklit eder
- Portre fotoğrafçılığında vazgeçilmez
- Farklı boyutlarda farklı etkiler

### Reflektör Teknikleri
- Mevcut ışığı yönlendirir
- Gölgeleri aydınlatır
- Taşınabilir ve ekonomik
- Altın, gümüş, beyaz seçenekleri

## Işık Yönleri ve Etkileri

### Ön Işık (Front Light)
- Düz ve eşit aydınlatma
- Gölge minimum
- Belgesel fotoğrafçılık için uygun

### Yan Işık (Side Light)
- Dramatik gölgeler
- Doku ve form vurgusu
- Sanatsal portreler için ideal

### Arka Işık (Back Light)
- Siluet efekti
- Işık halkası (rim light)
- Dramatik ve etkileyici

### Üst Işık (Top Light)
- Göz altlarında gölge
- Gizemli atmosfer
- Dikkatli kullanım gerektirir

## Renk Sıcaklığı

### Sıcak Işık (2700K-3200K)
- Sarı/turuncu tonlar
- Samimi atmosfer
- Akşam saatleri
- Tungsten lambalar

### Soğuk Işık (5500K-6500K)
- Mavi tonlar
- Profesyonel görünüm
- Gündüz ışığı
- LED paneller

### Karışık Işık
- Farklı renk sıcaklıklarının karışımı
- Yaratıcı renkli efektler
- Dikkatli beyaz dengesi gerektirir

## Pratik İpuçları

1. **Işığı Gözlemleyin**: Çevrenizdeki ışığı sürekli analiz edin
2. **Gölgelere Dikkat**: Gölgeler ışık kadar önemlidir
3. **Yön Değiştirin**: Farklı açılardan deneyin
4. **Sabırlı Olun**: Doğru ışığı bekleyin
5. **Pratik Yapın**: Farklı ışık koşullarında çekim yapın

## Sonuç

Işığı anlamak ve kontrol etmek, fotoğrafçılığın en önemli becerisidir. Sürekli gözlem ve pratikle, ışığı sanatsal ifadenizin bir parçası haline getirebilirsiniz.',
'Doğal ve yapay ışığı kullanarak etkileyici fotoğraflar çekme teknikleri. Işığın fotoğraftaki rolü ve yaratıcı kullanımı hakkında detaylı rehber...',
'/images/blog-photography-light.png',
true, 'published', NOW() - INTERVAL ''15 days''),

('Yaratıcı Süreç ve İlham', 'yaratici-surec-ilham',
'# Yaratıcı Süreç ve İlham

Sanatsal yaratıcılığı tetikleyen faktörler ve ilham bulma yöntemleri. Kişisel deneyimlerden yola çıkarak yaratıcı sürecin derinliklerini keşfediyoruz.

## İlham Nedir?

İlham, yaratıcı sürecin başlangıç noktasıdır. Ani bir fikir, duygu veya görsel olarak ortaya çıkabilir. İlhamın kaynakları sınırsızdır ve her sanatçı için farklı olabilir.

## İlham Kaynakları

### Doğa
- Renk paleti için çiçekler
- Form için ağaç dalları
- Doku için kayalar ve su
- Işık oyunları için gökyüzü

### Müzik
- Ritim ve kompozisyon
- Duygu aktarımı
- Renk ve ton ilişkisi
- Hareket ve dinamizm

### Edebiyat
- Görsel metaforlar
- Karakter tasarımı
- Atmosfer yaratma
- Hikaye anlatımı

### Günlük Yaşam
- İnsan davranışları
- Şehir manzaraları
- Sosyal etkileşimler
- Kişisel deneyimler

## Yaratıcı Sürecin Aşamaları

### 1. Hazırlık Aşaması
- Araştırma ve bilgi toplama
- Referans materyalleri inceleme
- Teknik becerileri geliştirme
- Zihinsel hazırlık

### 2. İnkübasyon Aşaması
- Bilinçaltında işleme
- Dinlenme ve bekleme
- Farklı aktivitelerle meşgul olma
- Sabırlı olma

### 3. Aydınlanma Aşaması
- "Eureka!" anı
- Çözümün ortaya çıkması
- Yaratıcı atılım
- Heyecan ve enerji

### 4. Doğrulama Aşaması
- Fikri test etme
- Teknik uygulama
- Revizyon ve iyileştirme
- Sonuca ulaşma

## İlham Bulma Teknikleri

### Beyin Fırtınası
- Serbest çağrışım
- Eleştiri yapmadan fikir üretme
- Görsel beyin fırtınası
- Kelime oyunları

### Görsel Araştırma
- Pinterest ve Instagram
- Sanat kitapları
- Müze ziyaretleri
- Doğa gözlemi

### Deneyim Çeşitliliği
- Yeni yerler ziyaret etme
- Farklı kültürlerle tanışma
- Yeni hobiler edinme
- Farklı sanat dallarını keşfetme

### Meditasyon ve Farkındalık
- Zihin sakinliği
- Duyusal farkındalık
- Nefes teknikleri
- Mindfulness pratiği

## Yaratıcı Blokajları Aşma

### Blokaj Nedenleri
- Mükemmeliyetçilik
- Eleştiri korkusu
- Stres ve yorgunluk
- Motivasyon eksikliği

### Çözüm Yöntemleri
- Küçük adımlarla başlama
- Deneme yanılma yaklaşımı
- Farklı medyumlar deneme
- Mola verme ve dinlenme

## Yaratıcılığı Geliştirme Alışkanlıkları

### Günlük Pratikler
- Eskiz defteri tutma
- Günlük gözlem notları
- Fotoğraf çekme
- Renk ve form çalışmaları

### Düzenli Rutinler
- Belirli saatlerde çalışma
- Yaratıcı mekan oluşturma
- Düzenli sanat tüketimi
- Sosyal paylaşım

### Sürekli Öğrenme
- Yeni teknikler öğrenme
- Online kurslar alma
- Atölye çalışmalarına katılma
- Diğer sanatçılarla etkileşim

## Kişisel Stil Geliştirme

### Etki Analizi
- Hangi sanatçılardan etkilendiğinizi belirleyin
- Ortak noktaları tespit edin
- Kendi yorumunuzu katın
- Özgün sentez yaratın

### Deneyim ve Hata
- Farklı stilleri deneyin
- Hatalardan öğrenin
- Risk almaktan korkmayın
- Sürekli evrim geçirin

## Motivasyonu Koruma

### İç Motivasyon
- Kişisel tatmin
- Öğrenme arzusu
- Kendini ifade etme
- Yaratma sevinci

### Dış Motivasyon
- Sosyal onay
- Maddi kazanç
- Rekabet
- Tanınma

## Sonuç

Yaratıcılık, geliştirilebilir bir beceridir. Düzenli pratik, açık zihin ve sabırla herkes yaratıcı potansiyelini ortaya çıkarabilir. Önemli olan, süreci sevmek ve sürekli öğrenmeye açık olmaktır.',
'Sanatsal yaratıcılığı tetikleyen faktörler ve ilham bulma yöntemleri. Kişisel deneyimlerden yola çıkarak yaratıcı sürecin derinliklerini keşfediyoruz...',
'/images/blog-creative-process.png',
false, 'draft', NULL);

-- Admin kullanıcısı (şifre: admin123 - hash'lenmiş hali)
INSERT INTO sanat_admin_users (email, password_hash, name, role) VALUES 
('admin@sanatci.com', '$2b$10$rQZ8kHWKQVz8kHWKQVz8kOQVz8kHWKQVz8kHWKQVz8kHWKQVz8kH', 'Admin User', 'admin');
