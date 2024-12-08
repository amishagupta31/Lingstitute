'use client'

import { motion } from "framer-motion"
import Image from "next/image"

interface AnimatedCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  delay?: number
}

export function AnimatedCard({ title, description, imageSrc, imageAlt, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="relative h-52 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className=" h-auto will-change-auto"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-blue-600 ">{title}</h3>
        <p className="text-gray-600 ">{description}</p>
      </div>
    </motion.div>
  )
}