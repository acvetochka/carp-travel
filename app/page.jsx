// import Header from '../sections/Header';
// import Hero from '../sections/Hero';
// import About from '@/components/About/About';
// import Services from '@/sections/Services';
// import Career from '@/sections/Career';
// import Gallery from '../sections/Gallery';
// import Contacts from '@/sections/Contacts';

import { About, Career, Contacts, Gallery, Header, Hero, Services } from "@/sections";

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
