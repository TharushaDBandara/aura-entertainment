'use client';

import dynamic from 'next/dynamic';
import ElementalNavbar from '@/components/ElementalNavbar';
import ElementalHero from '@/components/ElementalHero';
import About from '@/components/About';
import Artists from '@/components/Artists';
import Venue from '@/components/Venue';
import Tickets from '@/components/Tickets';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import RainOverlay from '@/components/RainOverlay';
import { Suspense } from 'react';

// Dynamically import ElementalScene to avoid SSR issues with Three.js
const ElementalScene = dynamic(
  () => import('@/components/ElementalScene/ElementalScene'),
  {
    ssr: false,
    loading: () => <div style={{ background: '#050810', minHeight: '100vh' }} />
  }
);

export default function Home() {
  return (
    <Suspense fallback={<div style={{ background: '#050810', minHeight: '100vh' }} />}>
      <ElementalScene>
        {/* Rain Overlay for rain/wave vibe */}
        <RainOverlay />

        <ElementalNavbar />
        <main>
          <ElementalHero />
          <About />
          <Artists />
          <Venue />
          <Tickets />
          <Contact />
        </main>
        <Footer />
      </ElementalScene>
    </Suspense>
  );
}
