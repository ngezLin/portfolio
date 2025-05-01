import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vincentius Franklin',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* This is where toasts will show up */}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
