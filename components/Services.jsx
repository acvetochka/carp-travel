'use client';

import { useState } from 'react';
import Image from 'next/image';

import { TbDiamondsFilled } from 'react-icons/tb';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Title from './Title';
import services from '../data/services';

const menuSlider = [
  'ATVs Traveling',
  'Rock climbing',
  'Hot air ballooning',
  'Skydiving',
  'Rafting',
];

const SlideList = ({ title, handleClick }) => {
  return (
    <ul className="list-none p-0 flex flex-col gap-4 md:row-start-2 md:col-start-2 mb-5">
      {menuSlider.map((item, idx) => (
        <li
          key={title + idx}
          className={`flex items-center uppercase text-lg-m md:text-lg-t xl:text-lg-d font-extralight cursor-pointer ${
            item === title
              ? 'opacity-100 font-medium'
              : ' opacity-50 hover:pl-1 hover:opacity-100'
          }`}
        >
          <button onClick={() => handleClick(idx)}>
            <TbDiamondsFilled
              size={10}
              className={`mr-2 ${
                item === title ? 'block opacity-100' : 'hidden'
              }`}
            />
          </button>
          {item}
        </li>
      ))}
    </ul>
  );
};

const Services = () => {
  const [swiper, setSwiper] = useState(null);

  const handleSlideChange = index => {
    if (swiper) {
      const slideId = `slide-${index}`;
      const slideElement = document.getElementById(slideId);
      console.log(slideElement);
      console.log(slideId);
      console.log(swiper);
      if (slideElement) {
        swiper.slideTo(slideElement, 500);
      }
    }
  };
  return (
    <>
      <section
        className="min-h-screen bg-opacity-75"
        data-section-id="services"
        id="services"
      >
        <Swiper
          effect={'fade'}
          onSwiper={s => setSwiper(s)}
          modules={[EffectFade]}
          className="min-h-[795px]"
        >
          {services.map((item, idx) => {
            const { id, bg, img, losung, title, description } = item;
            return (
              <div key={id} className="bg-black">
                <SwiperSlide
                  key={id}
                  className="bg-cover bg-center bg-opacity-75 min-h-[815px]"
                  id={`slide-${idx}`}
                  style={{
                    background: `linear-gradient(180deg, #001826 0%, rgba(0, 37, 49, 0.25) 40%, rgba(10, 24, 19, 0.75) 75%, rgba(0, 37, 49, 0.75) 100%),url(${bg}) center / cover no-repeat
                  `,
                    //   minHeight: [795px],
                  }}
                >
                  <div className="container py-[54px] min-h-screen  flex flex-col md:grid md:grid-cols-[463px_221px] md:grid-rows-[80px_167px_24px_120px] md:gap-x-5 md:gap-y-8 xl:grid-cols-[607px_292px_293px] xl:grid-rows-[119px_261px_168px] xl:gap-y-0">
                    <Title
                      title="We"
                      accent="Offer"
                      className="md:grid-start-col-1 md:col-start-1 md:row-start-1"
                    />
                    <p className="text-[43px] md:text-2xl-t  xl:text-2xl-d font-thin text-right mt-6 mb-4 md:my-0 md:text-left">
                      {id}
                      <span className="opacity-20">/05</span>
                    </p>
                    <Image
                      alt={title}
                      src={img}
                      width={280}
                      height={213}
                      className="mb-3 md:row-start-2 md:row-end-[span_4] w-full md:mb-0 md:h-[370px] xl:row-end-[span_2] xl:h-[429px]"
                    />
                    <p
                      className={`text-label font-extralight text-right mb-6 md:row-start-3 md:col-start-2 md:text-left xl:row-start-2 xl:col-start-3 `}
                    >
                      {losung}
                    </p>
                    <SlideList title={title} handleClick={handleSlideChange} />
                    <p className="font-extralight text-base-m md:text-[13px] xl:text-base-d md:text-justify mt-auto md:row-start-4 md:col-start-2 md:self-end xl:row-start-3 xl:col-start-3">
                      {description}
                    </p>
                  </div>
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
