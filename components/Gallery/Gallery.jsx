'use client';

import GalleryList from './GalleryList';
import Title from '../Title';
import GallerySwiper from './GallerySwiper';
import Section from '../Section';

const Gallery = () => {
  return (
    <Section id="gallery" className="gallery-bg">
      <div className="container md:text-center xl:text-start">
        <Title title="Our" accent="Gallery" />
        <div className="mt-6 md:mt-16 xl:mt-4">
          <GalleryList />
          <GallerySwiper />
        </div>
      </div>
    </Section>
  );
};

export default Gallery;
