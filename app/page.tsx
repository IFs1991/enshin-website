import Hero from './components/Hero'
import ServiceIntro from './components/ServiceIntro'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceIntro />
      
      <section className="py-20 bg-gray-50 dark:bg-dark-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-dark-text">NFTについて</h2>
          <div className="bg-white dark:bg-dark-surface p-8 rounded-lg shadow-md">
            <p className="text-lg mb-6 text-gray-600 dark:text-dark-text-muted">えん鍼では、Web3の要素を取り入れ、NFTを発行しています。NFT保有者は特別なコミュニティに参加でき、様々な特典を受けられます。</p>
            <Link href="/nft" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition duration-300">
              詳しく見る →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

