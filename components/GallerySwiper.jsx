import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import Image from 'next/image';

import gallery from '../data/gallery';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
// import styles from '../styles/swiper.module.css';

const initialSlideIndex = 1;

const swiperGallery = [
  ...gallery,
  ...gallery.map(item => ({ ...item, id: item.id + gallery.length })),
];

const GallerySwiper = () => {
  return (
    <Swiper
      effect={'coverflow'}
      // speed={1500}
      initialSlide={initialSlideIndex}
      hashNavigation={true}
      navigation={true}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      spaceBetween={24}
      coverflowEffect={{
        rotate: 0,
        // stretch: -50,
        scale: 1,
        // depth: 200,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={[EffectCoverflow, Navigation]}
      className="w-full mx-[-24px] mySwiper"
    >
      {swiperGallery.map(({ id, src, alt }) => (
        <SwiperSlide key={id} className="customSlide">
          <Image
            src={src}
            alt={alt}
            width={606}
            height={429}
            className="w-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallerySwiper;
