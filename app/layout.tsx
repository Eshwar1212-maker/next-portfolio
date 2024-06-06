import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ToasterContext from './ToasterContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eshwar Tangirala',
  description: 'My website to showcase my skills and projects',
  icons: {
    icon: '/portfoliologo.jpeg', // Path to your favicon in the public directory
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/portfoliologo.jpeg" />
      </head>
      <body className={inter.className}>
            {children}
            <ToasterContext />
      </body>
    </html>
  )
}
