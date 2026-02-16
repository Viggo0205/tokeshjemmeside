import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Toke\'s Auto - Bilværksted i Vejle | Bremser, Motor, Syn',
  description: 'Ærligt bilværksted i Vejle siden 2009. Specialister i bremser, motor diagnostik, gear, AC-reparation og syn. Drop-in olieskift. Industrivej 47B, 7100 Vejle. Ring 75 82 34 19.',
  keywords: 'bilværksted vejle, mekaniker vejle, autoreparation vejle, bremser vejle, motor diagnostik, olieskift vejle, syn vejle, AC reparation',
  authors: [{ name: 'Toke\'s Auto' }],
  openGraph: {
    title: 'Toke\'s Auto - Bilværksted i Vejle',
    description: 'Ærligt bilværksted siden 2009. Bremser, motor, gear, AC-reparation og syn. Drop-in olieskift.',
    url: 'https://viggo0205.github.io/tokeshjemmeside',
    siteName: 'Toke\'s Auto',
    locale: 'da_DK',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoRepair',
              name: 'Toke\'s Auto',
              description: 'Bilværksted i Vejle - bremser, motor, gear, AC-reparation og syn',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Industrivej 47B',
                addressLocality: 'Vejle',
                postalCode: '7100',
                addressCountry: 'DK',
              },
              telephone: '+4575823419',
              email: 'toke@tokesauto.dk',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
                  opens: '07:30',
                  closes: '17:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Friday',
                  opens: '07:30',
                  closes: '16:00',
                },
              ],
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className="antialiased text-gray-900">{children}</body>
    </html>
  )
}
