'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Globe, MessageCircle, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Globe className="h-6 w-6 text-blue-600" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Lingstitute</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className={`text-sm font-medium transition-colors ${pathname === '/' ? 'text-blue-600' : 'hover:text-blue-600'}`}>
            Home
          </Link>
          <Link href="/about" className={`text-sm font-medium transition-colors ${pathname === '/about' ? 'text-blue-600' : 'hover:text-blue-600'}`}>
            About
          </Link>
          <Link href="/courses" className={`text-sm font-medium transition-colors ${pathname === '/courses' ? 'text-blue-600' : 'hover:text-blue-600'}`}>
            Explore
          </Link>
           
          <div className="relative group">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              Enroll Now
            </Button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              {/* <Link href="/enroll" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">
                Enroll Online
              </Link> */}
              <Link href="https://wa.me/+9492022599" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">
                <MessageCircle className="w-4 h-4 inline-block mr-2" />
                Enroll via WhatsApp
              </Link>
            </div>
          </div>
        </nav>
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white "
          >
            <div className="container py-4 space-y-4">
              <Link href="/" className={`block text-sm font-medium transition-colors ${pathname === '/' ? 'text-blue-600' : 'hover:text-blue-600'}`}>
                Home
              </Link>
              <Link href="/about" className={`block text-sm font-medium transition-colors ${pathname === '/about' ? 'text-blue-600' : 'hover:text-blue-600'}`}>
                About
              </Link>
              <Link href="/courses" className={`block text-sm font-medium transition-colors ${pathname === '/courses' ? 'text-blue-600' : 'hover:text-blue-600'}`}>
                Explore
              </Link>
               
              <div className="space-y-2">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Enroll Now
                </Button>
                {/* <Link href="/enroll" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 rounded-md">
                  Enroll Online
                </Link> */}
                <Link href="https://wa.me/+9492022599" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 rounded-md">
                  <MessageCircle className="w-4 h-4 inline-block mr-2" />
                  Enroll via WhatsApp
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

