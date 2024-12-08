 'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface FeedbackCardProps {
  name: string
  role: string
  content: string
}

export function FeedbackCard({ name, role, content }: FeedbackCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-blue-800 hover:border-violet-600 shadow-xl  ">
        <CardContent className="p-6 flex flex-col h-full">
          <blockquote className="text-lg mb-4 flex-grow ">&ldquo;{content}&rdquo;</blockquote>
          <div className="mt-4">
            <div className="font-bold text-blue-700">{name}</div>
            <div className="text-sm text-gray-600  hover:text-indigo-600">{role}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

