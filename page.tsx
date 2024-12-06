import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, ArrowRight, Globe, Award } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-gray-900">
      {/* Header */}
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
            <Link href="/contact" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Contact
            </Link>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">Enroll Now</Button>
          </nav>
          <Button variant="ghost" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-block rounded-full bg-emerald-100 dark:bg-emerald-900 px-3 py-1 text-sm text-emerald-600 dark:text-emerald-300 font-medium">
                New Batch Starting Soon
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Master Corporate <span className="text-emerald-600">Communication</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-[600px]">
                Learn from top professors and industry experts from IITs and IIITs. Elevate your professional communication skills.
              </p>
               
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-800 text-white gap-2">
  <Link href="#about" className="text-sm font-medium hover:text-emerald-600 transition-colors">
    Start Your Journey <ArrowRight className="w-4 h-4" />
  </Link>
</Button>

               
            </div>
            <div className="relative aspect-video md:aspect-square">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Students collaborating"
                className="object-cover rounded-2xl shadow-2xl"
                fill
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-emerald-600/10 rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-emerald-50 dark:bg-emerald-900">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-emerald-800 dark:text-emerald-100">
              A Balanced Approach to Learning
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-white dark:bg-emerald-800 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <BookOpen className="w-12 h-12 text-emerald-600" />
                  <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-100">Theoretical Foundation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Dive deep into communication principles and frameworks, building a strong conceptual base.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-emerald-800 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <Users className="w-12 h-12 text-emerald-600" />
                  <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-100">Practical Application</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Put theory into practice with interactive exercises, simulations, and real-world scenarios.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-emerald-800 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <Award className="w-12 h-12 text-emerald-600" />
                  <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-100">Industry Recognition</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Gain skills and credentials valued by top companies in the corporate world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-emerald-600 text-white">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">500+</h3>
                <p className="text-xl">Students Enrolled</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">50+</h3>
                <p className="text-xl">Expert Instructors</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">95%</h3>
                <p className="text-xl">Success Rate</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
              <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600">Contact</Link></li>
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
    </div>
  )
}

