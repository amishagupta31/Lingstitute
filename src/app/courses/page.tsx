import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CoursesSection } from "@/components/courses/CoursesSection"
 

export default function Courses() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white dark:bg-gray-900">
      <Header />
      
      { <main className="flex-1">
         
         <CoursesSection />
      </main> }

      <Footer />
    </div>
  )
}

