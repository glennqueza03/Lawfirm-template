import type { Metadata } from 'next'
import { Inter, Quattrocento } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })
const quattrocento = Quattrocento({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-quattrocento' })

export const metadata: Metadata = {
  title: 'Law Office - Professional Legal Services',
  description: 'Professional legal services for immigration, family law, and criminal cases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} ${quattrocento.variable}`}>
        <LanguageProvider>
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  )
} 