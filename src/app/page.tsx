import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, ArrowRight, Award } from 'lucide-react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FeedbackCard } from "@/components/FeedbackCard"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-block rounded-full bg-blue-100  px-3 py-1 text-sm text-blue-900 dark:text-emerald-300 font-medium">
                New Batch Starting Soon
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Master Corporate <span className="text-blue-600">Communication</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-[600px]">
                Learn from top professors and industry experts from IITs and IIITs. Elevate your professional communication skills.
              </p>
              
              <Button size="lg" className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-700 text-white gap-2">
              <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
              >  Start Your Journey  
              </a>
              </Button>
              
            </div>
            <div className="relative aspect-video md:aspect-square">
              <Image
                src="/homeimage.jpg?height=600&width=600"
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
        <section className="py-20 bg-blue-50 ">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-blue-800 dark:text-emerald-100">
              A Balanced Approach to Learning
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-white dark:bg-emerald-800 shadow-lg hover:shadow-2xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <BookOpen className="w-12 h-12 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-800 dark:text-emerald-100">Theoretical Foundation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Dive deep into communication principles and frameworks, building a strong conceptual base.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-emerald-800 shadow-lg hover:shadow-2xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <Users className="w-12 h-12 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-800 dark:text-emerald-100">Practical Application</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Put theory into practice with interactive exercises, simulations, and real-world scenarios.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-emerald-800 shadow-lg hover:shadow-2xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <Award className="w-12 h-12 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-800 ">Industry Recognition</h3>
                  <p className="text-gray-600 ">
                    Gain skills and credentials valued by top companies in the corporate world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-950 to-blue-800  via-indigo-200  text-white">
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
        
        {/* Feedback Section */}
        <section className="py-20 bg-blue-50 ">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <FeedbackCard
                name="Jasmin "
                role="Marketing Professional"
                content="Lingstitute has transformed my communication skills. The courses are well-structured and the instructors are top-notch."
              />
              <FeedbackCard
                name="Rohan "
                role="Software Engineer"
                content="The soft skills training here is unparalleled. It has significantly boosted my confidence in professional settings."
              />
              <FeedbackCard
                name="Abhishek "
                role="Business Analyst"
                content="The personalized feedback and interactive sessions have made learning English enjoyable and effective. Highly recommended!"
              />
            </div>
            <Button asChild className="mt-12 bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/feedback">View All Feedback</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

