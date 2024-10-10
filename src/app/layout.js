import { Inter } from 'next/font/google'
import './globals.css'
 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Anokha 2024`,
  description: `12th Annual Techfest of Amrita Viswa Vidyapeetham, Coimbatore.`,
  favicon: `./favicon.ico`,
  icon: `./favicon.ico`,
  appleIcon: `./favicon.ico`
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
      <body className={inter.className}>{children}</body>
    </html>
  )
}
