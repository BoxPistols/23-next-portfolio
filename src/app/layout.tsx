import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <nav>
            <Link href='/'>Home</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        </header>
        <main className={styles.main}>{children}</main>
        <footer>
          <Link href='/'>Home</Link>
        </footer>
      </body>
    </html>
  )
}
