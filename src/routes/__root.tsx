import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'
import { ADDRESS, FLEET, PARENT_URL, RATING, SITE_URL, WHATSAPP_LINK } from '@/lib/site'

const siteName = 'Arriendo de Autos en Puerto Natales | Rent a Car Patagonia Chile'
const siteDescription =
  'Arriendo de autos, SUV y 4x4 en Puerto Natales para recorrer Torres del Paine. Seguro incluido, km libres, entrega en aeropuertos de Puerto Natales y Punta Arenas. Reserva por WhatsApp.'
const ogImage = `${SITE_URL}/.netlify/images?url=/img/hero.png&w=1200&h=630&fit=cover&fm=jpg`

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AutoRental',
  name: 'Rent a Car Patagonia Chile',
  url: SITE_URL,
  image: ogImage,
  description: siteDescription,
  logo: `${SITE_URL}/img/logo.png`,
  telephone: '+56920893939',
  sameAs: [PARENT_URL, WHATSAPP_LINK],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Magallanes 258',
    addressLocality: 'Puerto Natales',
    addressRegion: 'Magallanes y la Antártica Chilena',
    postalCode: '6160000',
    addressCountry: 'CL',
  },
  areaServed: ['Puerto Natales', 'Torres del Paine', 'Punta Arenas'],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: RATING.score, reviewCount: RATING.count },
  openingHours: 'Mo-Su 00:00-23:59',
  makesOffer: FLEET.map((v) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Car', name: `${v.name} ${v.engine}`, seatingCapacity: v.seats },
  })),
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`,
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: siteName },
      { name: 'description', content: siteDescription },
      { name: 'keywords', content: 'arriendo de autos Puerto Natales, rent a car Puerto Natales, car rental Puerto Natales, arriendo 4x4 Torres del Paine, rent a car Punta Arenas aeropuerto, Patagonia Chile' },
      { name: 'theme-color', content: '#1b4f9c' },
      { name: 'geo.region', content: 'CL-MA' },
      { name: 'geo.placename', content: 'Puerto Natales' },
      { property: 'og:title', content: siteName },
      { property: 'og:description', content: siteDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:image', content: ogImage },
      { property: 'og:locale', content: 'es_CL' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_URL}/` },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/logo-icon.png' },
      { rel: 'apple-touch-icon', href: '/img/logo-icon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap',
      },
    ],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify(structuredData) }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
