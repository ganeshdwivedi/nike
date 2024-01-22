import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from '@/redux/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nike,
  description: 'Just Do it',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>{children}</body>
      </StoreProvider>
    </html>
  )
}
