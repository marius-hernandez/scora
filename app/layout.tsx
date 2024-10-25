import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'core-js/proposals/promise-with-resolvers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'scora',
  description: 'scora lets you score your resume',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
