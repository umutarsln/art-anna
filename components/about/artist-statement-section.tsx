"use client"

import { TextReveal } from "@/components/ui/text-reveal"
import { useLanguageStore } from "@/lib/store"

/**
 * About sayfası sanatçı açıklaması bölümü - Sanatçının felsefesi ve yaratım yaklaşımı
 */
export function AboutArtistStatementSection() {
  const { t } = useLanguageStore()

  const philosophyPrinciples = [
    {
      id: 1,
      icon: "👁️",
      title: "Gerçeklikten Hayale Kaçış",
      description: "Çalışmalarımda gerçeklikten hayale kaçmaya çalışıyorum, bu da hikaye aracılığıyla çağdaş dünyaya referanslarla farklı zamanlarda buluşuyor."
    },
    {
      id: 2,
      icon: "⚡",
      title: "Gizemli Atmosfer",
      description: "Benim için önemli olan gizemli ve hapsolmuş atmosfer. Bastırılmış duygusallık, hassasiyet ve sihir ön plana çıkıyor."
    },
    {
      id: 3,
      icon: "❤️",
      title: "Duygusal Özgürlük",
      description: "Bu, duyguları açmak için daha özgür bir alan yaratıyor, burada semboller belirli bir ironi ve abartı ile anlamlarla iç içe geçiyor."
    },
    {
      id: 4,
      icon: "✨",
      title: "Sihirli İfade",
      description: "Anlamların bir tür sihirli hareketle gizlendiği, iç içe geçmiş dünyalar yaratan resmi bir oyun var."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <TextReveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t("about.artistStatement.title")}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Sanatsal yaratım sürecimi yönlendiren temel ilkeler ve değerler. 
              Her eserin arkasındaki düşünce yapısı ve yaratıcı motivasyon.
            </p>
          </div>
        </TextReveal>

        {/* Main Philosophy Statement */}
        <TextReveal delay={0.2}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12 mb-16 border border-blue-100">
            <blockquote className="text-center">
              <p className="font-serif text-2xl lg:text-3xl text-gray-900 leading-relaxed mb-8 italic">
                "{t("about.artistStatement.text")}"
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-0.5 bg-blue-600"></div>
                <cite className="font-body text-gray-600">
                  Artist Statement, 2024
                </cite>
                <div className="w-16 h-0.5 bg-blue-600"></div>
              </div>
            </blockquote>
          </div>
        </TextReveal>

        {/* Philosophy Principles */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {philosophyPrinciples.map((principle) => (
            <TextReveal key={principle.id} delay={principle.id * 0.1}>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{principle.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                      {principle.title}
                    </h3>
                    <p className="font-body text-gray-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            </TextReveal>
          ))}
        </div>

        {/* Detailed Philosophy */}
        <div className="prose prose-lg max-w-none">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <TextReveal delay={0.4}>
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-semibold text-gray-900">
                  Yaratıcı Süreç
                </h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  Benim için önemli olan gizemli ve hapsolmuş atmosfer. Bastırılmış duygusallık, 
                  hassasiyet ve sihir ön plana çıkıyor. Bu, duyguları açmak için daha özgür bir 
                  alan yaratıyor, burada gerçeklik ve hayal arasındaki sınırlar akışkan hale geliyor.
                </p>
                <p className="font-body text-gray-600 leading-relaxed">
                  Aynı zamanda, sembollerin belirli bir ironi, bir abartı ile anlamlarla iç içe 
                  geçtiği, bir tür sihirli hareketle gizlenen resmi bir oyun var. Her eser farklı 
                  zamansal boyutlar ve çağdaş referanslar arasında bir portal haline geliyor.
                </p>
              </div>
            </TextReveal>

            <TextReveal delay={0.5}>
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-semibold text-gray-900">
                  Sanatsal Vizyon
                </h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  Sanatsal vizyonum, o kadar iç içe geçmiş dünyaları keşfediyor ki bunlar 
                  anlaşılmaz hale geliyor, olumlu vizyonun bir tür kaybı olduğu noktaya kadar. 
                  Bu kasıtlı belirsizlik daha derin duygusal etkileşim için alan yaratıyor.
                </p>
                <p className="font-body text-gray-600 leading-relaxed">
                  Bu yaklaşım aracılığıyla, geleneksel algıyı zorlayan ve izleyicileri gizem 
                  ve duygunun birleştiği bir aleme davet eden, anlama ve hissetme için yeni 
                  olasılıklar oluşturan eserler yaratmayı amaçlıyorum.
                </p>
              </div>
            </TextReveal>
          </div>
        </div>

        {/* Call to Action */}
        <TextReveal delay={0.6}>
          <div className="text-center mt-16 pt-12 border-t border-gray-200">
            <p className="font-body text-gray-600 mb-6">
              Sanatsal felsefem ve yaratım sürecim hakkında daha fazla bilgi almak ister misiniz?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                Atölye Ziyareti Planlayın
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                Röportaj Talep Edin
              </button>
            </div>
          </div>
        </TextReveal>
      </div>
    </section>
  )
} 