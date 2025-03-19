import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import {motion} from 'framer-motion';

import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import gallery from '../../data/gallery';

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), { ssr: false });

const initialSlideIndex = 1;

const swiperGallery = [
  ...gallery,
  ...gallery.map(item => ({ ...item, id: item.id + gallery.length })),
];

export const GallerySwiper = () => {
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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

