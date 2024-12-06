import Link from "next/link"
import { Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t py-12 bg-emerald-50 dark:bg-emerald-900">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-emerald-600" />
            <span className="text-2xl font-bold text-emerald-800 dark:text-emerald-100">Lingstitute</span>
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-300">Empowering communication in the corporate world.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-emerald-800 dark:text-emerald-100">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600">Home</Link></li>
            <li><Link href="/about" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600">About</Link></li>
             
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-emerald-800 dark:text-emerald-100">Legal</h4>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-emerald-800 dark:text-emerald-100">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

