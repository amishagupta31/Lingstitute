import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
  
import { ToastProvider } from '@radix-ui/react-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lingstitute - Master Corporate Communication',
  description: 'Learn from top professors and industry experts from IITs and IIITs. Elevate your professional communication skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastProvider />
         
      </body>
    </html>
  )
}

