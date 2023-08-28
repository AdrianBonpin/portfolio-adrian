import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 's t a y  t u n e d . . .',
  description: 'portfolio website by Adrian Bonpin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
