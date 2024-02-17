import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import {motion} from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import gallery from '../../data/gallery';

const initialSlideIndex = 1;

const swiperGallery = [
  ...gallery,
  ...gallery.map(item => ({ ...item, id: item.id + gallery.length })),
];

const GallerySwiper = () => {
  return (
    <div className="max-md:hidden">
      <Swiper
        effect={'coverflow'}
        initialSlide={initialSlideIndex}
        hashNavigation={true}
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={24}
        coverflowEffect={{
          rotate: 0,
          scale: 1,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        modules={[EffectCoverflow, Navigation]}
        className="w-full mx-[-24px] mySwiper max-md:hidden"
      >
        {swiperGallery.map(({ id, src, alt }) => (
          <SwiperSlide key={id} className="customSlide">
             <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                key={id}
              >
            <Image
              src={src}
              alt={alt}
              width={606}
              height={429}
              className="w-full"
            />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySwiper;
