import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, ArrowRight, Award } from 'lucide-react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-gray-900">
      <Header />

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
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
                Start Your Journey <ArrowRight className="w-4 h-4" />
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

      <Footer />
    </div>
  )
}

