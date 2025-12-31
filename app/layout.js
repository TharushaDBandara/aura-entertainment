import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata = {
  title: 'Viragaya | AURA Entertainment',
  description: 'Experience an evening of musical excellence with Amarasiri Peries, Amal Perera, and Kasun Kalhara at Musaeus College Auditorium on March 7th, 2026.',
  keywords: 'Viragaya, AURA Entertainment, Sri Lankan Concert, Amarasiri Peries, Amal Perera, Kasun Kalhara, Musaeus College, Colombo Concert',
  openGraph: {
    title: 'Viragaya | An Evening of Musical Excellence',
    description: 'Join us for the most sophisticated musical event of the year featuring three legendary Sri Lankan artists.',
    type: 'website',
    locale: 'en_US',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicEvent',
  name: 'Viragaya',
  startDate: '2026-03-07T19:00',
  location: {
    '@type': 'Place',
    name: 'Musaeus College Auditorium',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Colombo',
      addressCountry: 'LK',
    },
  },
  description: 'Experience an evening of musical excellence with Amarasiri Peries, Amal Perera, and Kasun Kalhara.',
  performer: [
    {
      '@type': 'Person',
      name: 'Amarasiri Peiris',
    },
    {
      '@type': 'Person',
      name: 'Amal Perera',
    },
    {
      '@type': 'Person',
      name: 'Kasun Kalhara',
    },
  ],
  organizer: {
    '@type': 'Organization',
    name: 'AURA Entertainment',
  },
  offers: {
    '@type': 'Offer',
    price: '3500',
    priceCurrency: 'LKR',
    availability: 'https://schema.org/InStock',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
