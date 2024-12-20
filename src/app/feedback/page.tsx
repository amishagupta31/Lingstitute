'use client'

import { motion } from "framer-motion"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FeedbackCard } from "@/components/FeedbackCard"
import { FeedbackForm } from "@/components/FeedbackForm"
 

export default function Feedback() {
  const feedbacks = [
    {
      name: "Rohan",
      role: "Marketing Professional",
      content: "Lingstitute has transformed my communication skills. The courses are well-structured and the instructors are top-notch."
    },
    {
      name: "Jashmine",
      role: "Software Engineer",
      content: "The soft skills training here is unparalleled. It has significantly boosted my confidence in professional settings."
    },
    {
      name: "Ankita",
      role: "Business Analyst",
      content: "The personalized feedback and interactive sessions have made learning English enjoyable and effective. Highly recommended!"
    },
    {
      name: "Isha",
      role: "HR Manager",
      content: "Lingstitute's courses have helped me improve my business communication skills immensely. It's been a game-changer for my career."
    },
    {
      name: "Rahul",
      role: "Graduate Student",
      content: "As an international student, Lingstitute has been instrumental in helping me adapt to academic writing and presentations in English."
    },
    {
      name: "Sarthak",
      role: "Customer Service Representative",
      content: "The courses here have significantly improved my ability to communicate with clients. I feel more confident in my day-to-day work."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-200 to-white ">
      <Header />
      
      <main className="flex-1">
        <section className="py-20">
          <div className="container px-4">
            <motion.h1 
              className="text-4xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              What Our Students Say
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600  mb-12 text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hear from our students about their experiences and how Lingstitute has helped them improve their language and communication skills.
            </motion.p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
              {feedbacks.map((feedback, index) => (
                <FeedbackCard key={index} {...feedback} />
              ))}
            </div>
            <FeedbackForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

