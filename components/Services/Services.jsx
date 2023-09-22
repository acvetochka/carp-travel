'use client';

import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import SlideList from './SlideList';
import ServicesSlideInfo from './ServicesSlideInfo';
import services from '../../data/services';

const Services = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveSlide(swiper.realIndex);
      });
    }
  }, [swiper]);

  const handleMenuButtonClick = slideIndex => {
    if (swiper) {
      swiper.slideTo(slideIndex);
    }
  };

  return (
    <>
      <section
        className="bg-opacity-75 relative"
        data-section-id="services"
        id="services"
      >
        <SlideList
          activeSlide={activeSlide}
          onMenuButtonClick={handleMenuButtonClick}
        />
        <Swiper
          effect={'fade'}
          onSwiper={s => setSwiper(s)}
          modules={[EffectFade]}
          slidesPerView={1}
        >
          {services.map(item => {
            const { id, bg } = item;
            return (
              <div key={id} className="bg-black">
                <SwiperSlide
                  key={id}
                  className="bg-cover bg-center bg-opacity-75 py-[54px] md:py-[64px] xl:py-[104px]"
                  style={{
                    background: `linear-gradient(180deg, #001826 0%, rgba(0, 37, 49, 0.25) 40%, rgba(10, 24, 19, 0.75) 75%, rgba(0, 37, 49, 0.75) 100%),url(${bg}) center / cover no-repeat
                    `,
                  }}
                >
                  <ServicesSlideInfo item={item} idx={swiper?.activeIndex} />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Services;
