import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-0 py-16 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">えん鍼 -Enshin-</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">エンジニアのパフォーマンスを最大化する鍼灸施術サービス</p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full mx-auto mb-12 overflow-hidden"
        >
          <Image
            src="/images/hero/main-image.jpg"
            alt="施術風景"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </motion.div>
        <Link href="/reservation" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block">
          予約する
        </Link>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-20 z-0"></div>
    </section>
  )
}

export default Hero

