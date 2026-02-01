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
  title: 'Megha Varsha | AURA Entertainment - The Cycle Begins: Water',
  description: 'Experience an electrifying live concert featuring IMAN, UVINDU, MIHIRAN, DHYAN, and DILU. Enter the Elemental Chamber where Water awakens.',
  keywords: 'Megha Varsha, මේඝ වර්ෂා, AURA Entertainment, Sri Lankan Concert, IMAN, UVINDU, MIHIRAN, DHYAN, DILU, Sri Palee College, Live Concert, Water Element',
  openGraph: {
    title: 'Megha Varsha - The Cycle Begins: Water | AURA Entertainment',
    description: 'Enter the Elemental Chamber. The Water element awakens for the most electrifying musical event of the year.',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: '/megha-varsha-logo.svg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicEvent',
  name: 'Megha Varsha - Live in Concert',
  startDate: '2026-03-20T19:00',
  location: {
    '@type': 'Place',
    name: 'Sri Palee College Auditorium',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Horana',
      addressCountry: 'LK',
    },
  },
  description: 'Experience an electrifying live concert featuring IMAN, UVINDU, MIHIRAN, DHYAN, and DILU.',
  performer: [
    {
      '@type': 'Person',
      name: 'IMAN',
    },
    {
      '@type': 'Person',
      name: 'UVINDU',
    },
    {
      '@type': 'Person',
      name: 'MIHIRAN',
    },
    {
      '@type': 'Person',
      name: 'DHYAN',
    },
    {
      '@type': 'Person',
      name: 'DILU',
    },
  ],
  organizer: {
    '@type': 'Organization',
    name: 'AURA Entertainment',
  },
  offers: {
    '@type': 'Offer',
    price: '2500',
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

