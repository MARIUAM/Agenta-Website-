import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/sonner'
import { ParticlesBackground } from '@/components/particles-background'
import { NeuralNetwork } from '@/components/neural-network'
import { Chatbot } from '@/components/chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agentic AI - Advanced Artificial Intelligence Solutions',
  description: 'Empowering businesses with cutting-edge AI solutions for the future.',
  openGraph: {
    title: 'Agentic AI - Advanced Artificial Intelligence Solutions',
    description: 'Empowering businesses with cutting-edge AI solutions for the future.',
    type: 'website',
    locale: 'en_US',
    url: 'https://agentic-ai.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic AI - Advanced Artificial Intelligence Solutions',
    description: 'Empowering businesses with cutting-edge AI solutions for the future.',
  },
  metadataBase: new URL('https://agentic-ai.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <NeuralNetwork />
            <ParticlesBackground />
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Chatbot />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}