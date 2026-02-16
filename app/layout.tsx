import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Toke\'s Auto - Bilværksted i Vejle',
  description: 'Ærligt bilværksted startet 2009. Bremser, motor, gear, AC, syn. Drop-in til olieskift. Industrivej 47B, Vejle. Ring 75 82 34 19.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <body className="antialiased text-gray-900">{children}</body>
    </html>
  )
}
