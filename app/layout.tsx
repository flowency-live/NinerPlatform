import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Niner | CRM for Service Businesses',
  description: 'The contextual CRM that brings your clients, suppliers, and work together in one place. Built for service businesses that manage complex client relationships.',
  keywords: ['CRM', 'client management', 'supplier management', 'service business', 'booking management', 'travel logistics', 'operations'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
