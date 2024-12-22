'use client'

import { motion } from "framer-motion"
import { AnimatedCard } from "./AnimatedCard"
 
import any from '/public/anytimeimage.jpg'
import expert from '/public/expertinstructors.jpg'
import global from '/public/globalcommunity.jpg'

export function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container px-4">
      <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.2 }}
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
            imageSrc= {any}
            imageAlt="Online learning illustration"
            delay={0.2}
          />
          <AnimatedCard
            title="Expert Instructors"
            description="Our instructors are experienced, certified, and passionate about teaching English to learners of all levels."
            imageSrc= {expert}
            imageAlt="Expert instructors teaching"
            delay={0.2}
          />
          <AnimatedCard
            title="Join a Global Community"
            description="Connect with thousands of learners from different parts of the world. Share experiences and improve together."
            imageSrc=  {global}
            imageAlt="Global community of learners"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  )
}

