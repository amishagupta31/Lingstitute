'use client'

import { motion } from "framer-motion"
import { AnimatedCard } from "./AnimatedCard"

export function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container px-4">
      <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <h2 className="text-4xl font-bold text-center mb-16">
    Why Learn With Us
  </h2>
</motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedCard
            title="Learn Anytime, Anywhere"
            description="With our flexible online courses, you can learn English at your own pace, from anywhere in the world."
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Online learning illustration"
            delay={0.2}
          />
          <AnimatedCard
            title="Expert Instructors"
            description="Our instructors are experienced, certified, and passionate about teaching English to learners of all levels."
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Expert instructors teaching"
            delay={0.4}
          />
          <AnimatedCard
            title="Join a Global Community"
            description="Connect with thousands of learners from different parts of the world. Share experiences and improve together."
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Global community of learners"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  )
}

