'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { name: 'トップ', href: '/' },
  { name: 'サービス紹介', href: '/service' },
  { name: '料金', href: '/pricing' },
  { name: 'コンセプト/由来', href: '/concept' },
  { name: 'NFTについて', href: '/nft' },
  { name: '創設者紹介', href: '/founder' },
  { name: '予約', href: '/reservation' },
  { name: 'アクセス', href: '/access' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-dark-surface shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-dark-text font-roboto">えん鍼 -Enshin-</Link>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-800 dark:text-dark-text hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button className="ml-4 text-gray-800 dark:text-dark-text" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-dark-text hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

