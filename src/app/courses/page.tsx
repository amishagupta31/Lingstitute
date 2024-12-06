import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CoursesSection } from "@/components/courses/CoursesSection"
 

export default function Courses() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      { <main className="flex-1">
        {/* <section className="py-20">
          <div className="container px-4">
            <h1 className="text-4xl font-bold mb-8">Our Courses</h1>
            <p className="text-lg mb-8">Explore our range of English language and skill development courses.</p>
          </div>
        </section> */}
         <CoursesSection />
      </main> }

      <Footer />
    </div>
  )
}

