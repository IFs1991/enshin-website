import './globals.css'
import { Noto_Sans_JP, Roboto } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from './contexts/ThemeContext'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'えん鍼 -Enshin-',
  description: 'エンジニアのパフォーマンスを最大化する鍼灸施術サービス',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSansJP.className} ${roboto.variable}`}>
      <ThemeProvider>
        <body className="flex flex-col min-h-screen bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-dark-text">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}

