import { Zap, Activity, RefreshCw } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: '眼精疲労コース',
    description: 'デジタルデバイスの長時間使用によるストレスを軽減し、目の疲れを改善します。目の周りのツボを刺激し、血行を促進することで眼精疲労を改善します。',
    icon: Zap,
  },
  {
    title: '腰痛肩こりコース',
    description: '長時間のデスクワークによる腰痛や肩こりを緩和し、身体の柔軟性を高めます。腰や肩周りの筋肉をほぐし、血行を促進することで痛みや凝りを軽減します。',
    icon: Activity,
  },
  {
    title: '不眠リラックスコース',
    description: 'ストレスや緊張を和らげ、質の高い睡眠とリラックスした状態をサポートします。自律神経のバランスを整え、体内時計の調整を助けることで、心身の緊張を緩和します。',
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
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                href="/reservation"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                予約する
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceIntro