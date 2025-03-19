'use client';

import { useMediaQuery } from 'react-responsive';
import { GalleryList, GallerySwiper, Section, Title } from "@/components";

// import GalleryList from '../components/Gallery/GalleryList';
// import Title from '../components/Title';
// import GallerySwiper from '../components/Gallery/GallerySwiper';
// import Section from '../components/Section';

export const Gallery = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Section id="gallery" className="gallery-bg">
      <div className="container md:text-center xl:text-start">
        <Title title="Our" accent="Gallery" />
        <div className="mt-6 md:mt-16 xl:mt-4">
          {isMobile ? <GalleryList /> :
          <GallerySwiper />}
        </div>
      </div>
    </Section>
  );
};

