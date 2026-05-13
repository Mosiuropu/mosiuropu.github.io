import './globals.css'
import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThemeScript from '../components/ThemeScript'

export const metadata = {
  title: 'Md. Mosiur Rahman — Agricultural Scientist',
  description: 'Senior Scientific Officer at BARI specializing in molecular plant breeding, floriculture, and plant genomics.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
