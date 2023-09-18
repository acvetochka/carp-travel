import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Keyboard } from 'swiper/modules';
import Image from 'next/image';

import gallery from '../../data/gallery';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import { useEffect, useRef } from 'react';
// import styles from '../styles/swiper.module.css';

const initialSlideIndex = 1;

const swiperGallery = [
  ...gallery,
  ...gallery.map(item => ({ ...item, id: item.id + gallery.length })),
];

const GallerySwiper = () => {
  // let swiperInstance;

  // const handleSwiperInit = swiper => {
  //   swiperInstance = swiper;
  //   const nextButton = swiper.navigation.nextEl;
  //   const prevButton = swiper.navigation.prevEl;
  //   if (nextButton) {
  //     nextButton.setAttribute('tabindex', '0');
  //   }
  //   if (prevButton) {
  //     prevButton.setAttribute('tabindex', '0');
  //   }
  // };

  return (
    <Swiper
      // ref={swiperRef}
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
      // keyboard={{ enabled: true, onlyInViewport: false }}
      modules={[EffectCoverflow, Navigation]}
      // onSwiper={handleSwiperInit}
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
      {/* <button
        className="swiper-button-prev focus:outline-none focus:ring focus:border-blue-300"
        ref={prevButtonRef}
        tabIndex="0"
      >
        Prev
      </button>
      <button
        className="swiper-button-next focus:outline-none focus:ring focus:border-blue-300"
        ref={nextButtonRef}
        tabIndex="0"
      >
        Next
      </button> */}
    </Swiper>
  );
};

export default GallerySwiper;
