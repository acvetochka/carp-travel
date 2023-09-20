import Header from '../components/Header';
import Hero from '../components/Hero/Hero';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Career from '@/components/Career/Career';
import Gallery from '../components/Gallery/Gallery';
import Contacts from '@/components/Contacts/Contacts';
// import MobileMenu from '@/components/MobileMenu';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contacts />
    </main>
  );
}
