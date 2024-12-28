import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">えん鍼 -Enshin-</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">エンジニアのパフォーマンスを最大化する鍼灸施術サービス</p>
        <div className="relative w-full max-w-4xl mx-auto mb-12 rounded-lg overflow-hidden shadow-2xl">
          <Image src="/images/hero/main-image.jpg" alt="施術風景" width={1200} height={600} className="w-full h-auto" />
        </div>
        <Link href="/reservation" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block">
          予約する
        </Link>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-50 z-0"></div>
    </section>
  )
}

export default Hero

