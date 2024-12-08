import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { MissionSection } from "@/components/about/MissionSection"
import { WhyChooseUs } from "@/components/about/WhyChooseUs"
import { TeachingMethod } from "@/components/about/TeachingMethod"
import { ContactForm } from "@/components/about/ContactForm"
 

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-100 ">
      <Header />
      
      <main className="flex-1">
        <MissionSection />
        <WhyChooseUs />
        <TeachingMethod />
        <section className="py-20 bg-blue-100">
          <div className="container px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
       
    </div>
  )
}

