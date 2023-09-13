'use client';

import { useMediaQuery } from 'react-responsive';
import GalleryList from './GalleryList';
import Title from './Title';
import GallerySwiper from './GallerySwiper';

const Gallery = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <section
      className="gallery-bg min-h-screen  py-14 md:py-16 xl:py-20"
      data-section-id="gallery"
      id="gallery"
    >
      <div className="container md:text-center xl:text-start">
        <Title title="Our" accent="Gallery" />
        <div className="mt-6 md:mt-16 xl:mt-4">
          {isMobile ? <GalleryList /> : <GallerySwiper />}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
