import { Zap, Activity, RefreshCw } from 'lucide-react'

const services = [
  {
    title: '鍼灸施術',
    description: 'エンジニアの身体的な疲労や不調を改善し、パフォーマンスを向上させます。',
    icon: Zap,
  },
  {
    title: '筋膜リリース',
    description: '長時間のデスクワークによる筋肉の緊張を緩和し、柔軟性を高めます。',
    icon: Activity,
  },
  {
    title: 'マッサージ',
    description: '全身のリラックスと血行促進を図り、心身のリフレッシュをサポートします。',
    icon: RefreshCw,
  },
]

const ServiceIntro = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">サービス紹介</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
              <service.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceIntro

