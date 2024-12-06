'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
 

const languageFeatures = [
  {
    title: "Course Validity",
    description: "Enroll in courses with flexible timelines and lifetime course validity period.",
    image: "/placeholder.svg?height=200&width=200",
     
  },
  {
    title: "Complete Grammar Classes",
    description: "Master English grammar with comprehensive, easy-to-follow grammar classes covering all key topics.",
    image: "/placeholder.svg?height=200&width=200",
     
  },
  {
    title: "Study Material",
    description: "Get access to a wide range of study materials, including textbooks, worksheets, and practice exercises.",
    image: "/placeholder.svg?height=200&width=200",
     
  },
  {
    title: "Vocabulary Builder",
    description: "Expand your vocabulary with daily word lists, quizzes, and real-life usage examples.",
    image: "/placeholder.svg?height=200&width=200",
     
  },
  {
    title: "Practice Questions",
    description: "Enhance your skills with a variety of practice questions to assess your learning progress.",
    image: "/placeholder.svg?height=200&width=200",
     
  }
]

const softSkills = [
  {
    title: "Debate",
    description: "Participate in debates to improve critical thinking, argument formulation, and communication skills.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    title: "Discussion",
    description: "Engage in discussions to enhance your ability to express ideas clearly and listen actively.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    title: "Business Communication",
    description: "Learn professional communication skills to succeed in a corporate environment.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    title: "Presentation Skills",
    description: "Master the art of delivering impactful presentations with confidence.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    title: "Interactive Skills",
    description: "Develop interpersonal skills and improve your ability to interact effectively with others.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    title: "Learn Microsoft Tools",
    description: "Gain proficiency in essential Microsoft Office tools such as Word, Excel, and PowerPoint.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    title: "AI Tools to Boost Productivity",
    description: "Learn to leverage AI tools to enhance your productivity and workflow.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    title: "Interactive Games to Build Networking",
    description: "Enhance your networking skills through engaging interactive games and activities.",
    image: "/placeholder.svg?height=200&width=200"
  }
]

function FeatureCard({ title, description, image, color, index }: {
  title: string
  description: string
  image: string
  color?: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${color || 'from-emerald-500/20 to-emerald-700/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="relative p-6 space-y-4">
          <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h3 className="text-xl font-semibold text-foreground/90 group-hover:text-foreground transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  )
}

export function CoursesSection() {
  return (
    <section className="py-20 bg-gray-50 ">
      <div className="container px-4">
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
   

        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Explore Our English Language and Skill Development Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
            Join us and take advantage of our language learning resources and soft skills training for a successful career.
          </p>
        </motion.div>

        <div className="space-y-16">
          <div>
          <div className="text-2xl font-semibold mb-8">
  <motion.h3
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    Language Learning Features
  </motion.h3>
</div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {languageFeatures.map((feature, index) => (
                <FeatureCard key={feature.title} {...feature} index={index} />
              ))}
            </div>
          </div>

          <div>
          <motion.h3
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <h3 className="text-2xl font-semibold mb-8">
    Soft Skills for Interviews and Career Growth
  </h3>
</motion.h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {softSkills.map((skill, index) => (
                <FeatureCard key={skill.title} {...skill} index={index} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
           
        >
           
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white align-middle items-center">
            <Link href="https://wa.me/1234567890">Enroll Now</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

