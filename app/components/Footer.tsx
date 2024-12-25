import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-dark-surface text-white dark:text-dark-text">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold font-roboto">えん鍼 -Enshin-</Link>
          </div>
          <div className="flex flex-wrap justify-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-blue-400 transition duration-300">プライバシーポリシー</Link>
            <Link href="/terms" className="hover:text-blue-400 transition duration-300">特定商取引法に基づく表記</Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 えん鍼 -Enshin-. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

