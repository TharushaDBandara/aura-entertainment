import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Artists from '@/components/Artists';
import Venue from '@/components/Venue';
import Tickets from '@/components/Tickets';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Artists />
        <Venue />
        <Tickets />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
