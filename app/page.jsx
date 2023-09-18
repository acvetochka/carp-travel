import Header from '../components/Header';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Contacts from '@/components/Contacts';
import About from '@/components/About';
import Services from '@/components/Services';
import RootLayout from './layout';

export default function Home() {
  // {
  //   title;
  // }
  // const title = ;
  return (
    <RootLayout>
      <main>
        <Header />
        <Hero />
        {/* <About /> */}
        <Services />
        <Gallery />
        <Contacts />
      </main>
    </RootLayout>
  );
}
