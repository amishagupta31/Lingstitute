'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { ThankYouModal } from './ThankYouModal'
// import { ThankYouModal } from "@/components/ThankYouModal"

export function FeedbackForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [feedback, setFeedback] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
    setName('')
    setEmail('')
    setRole('')
    setFeedback('')
  }

  const closeModal = () => {
    setIsModalOpen(false)
    toast({
      title: "Feedback Submitted!",
      description: "Thank you for your feedback. We appreciate your input!",
    })
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-white  p-8 rounded-lg shadow-lg max-w-md mx-auto"
      >
        <h3 className="text-2xl font-bold mb-6 text-center">Submit Your Feedback</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700  mb-1">Name</label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700  mb-1">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700  mb-1">Role</label>
            <Input
              id="role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              placeholder="Your Professional Role"
            />
          </div>
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700  mb-1">Feedback</label>
            <Textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              placeholder="Share your experience with Lingstitute..."
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Submit Feedback</Button>
        </form>
      </motion.div>
      <ThankYouModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

