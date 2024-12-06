import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, MessageCircle } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Globe className="h-6 w-6 text-emerald-600" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400">Lingstitute</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            About
          </Link>
          <Link href="/courses" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Courses
          </Link>
          <div className="relative group">
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">
              Enroll Now
            </Button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link href="/enroll" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-100">
                Enroll Online
              </Link>
              <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-100">
                <MessageCircle className="w-4 h-4 inline-block mr-2" />
                Enroll via WhatsApp
              </Link>
            </div>
          </div>
        </nav>
        <Button variant="ghost" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </Button>
      </div>
    </header>
  )
}

