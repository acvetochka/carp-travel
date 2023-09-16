'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// import { TbDiamondsFilled } from 'react-icons/tb';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Title from './Title';
import SlideList from './SlideList';

import services from '../data/services';

// const menuSlider = [
//   'ATVs Traveling',
//   'Rock climbing',
//   'Hot air ballooning',
//   'Skydiving',
//   'Rafting',
// ];

// const SlideList = ({ activeSlide, onMenuButtonClick }) => {
//   return (
//     <ul className="list-none p-0 flex flex-col gap-4 md:row-start-2 md:col-start-2 mb-5 absolute top-10 z-[100]">
//       {menuSlider.map((item, idx) => (
//         <li
//           key={item + idx}
//           className={`flex items-center uppercase text-lg-m md:text-lg-t xl:text-lg-d font-extralight cursor-pointer ${
//             idx === activeSlide
//               ? 'opacity-100 font-medium'
//               : ' opacity-50 hover:pl-1 hover:opacity-100'
//           }`}
//         >
//           <button
//             className="flex items-center uppercase text-left"
//             onClick={() => onMenuButtonClick(idx)}
//           >
//             <TbDiamondsFilled
//               size={10}
//               className={`mr-2 ${
//                 idx === activeSlide ? 'block opacity-100' : 'hidden'
//               }`}
//             />
//             {item}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

const Services = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveSlide(swiper.realIndex); // Оновлюємо стан при зміні слайдів
        console.log(swiper);
      });
    }
  }, [swiper]);

  const handleMenuButtonClick = slideIndex => {
    if (swiper) {
      console.log(slideIndex);
      swiper.slideTo(slideIndex);
    }
  };

  return (
    <>
      <section
        className="min-h-screen bg-opacity-75 relative"
        data-section-id="services"
        id="services"
      >
        <SlideList
          // title={title}
          // activeSlide={idx}
          activeSlide={activeSlide}
          onMenuButtonClick={handleMenuButtonClick}
        />
        <Swiper
          effect={'fade'}
          onSwiper={s => setSwiper(s)}
          modules={[EffectFade]}
          slidesPerView={1}
          // className="min-h-[795px]"
        >
          {services.map((item, idx) => {
            const { id, bg, img, losung, title, description } = item;

            return (
              <div key={id} className="bg-black">
                <SwiperSlide
                  key={id}
                  className="bg-cover bg-center bg-opacity-75 min-h-[815px]"
                  style={{
                    background: `linear-gradient(180deg, #001826 0%, rgba(0, 37, 49, 0.25) 40%, rgba(10, 24, 19, 0.75) 75%, rgba(0, 37, 49, 0.75) 100%),url(${bg}) center / cover no-repeat
                  `,
                  }}
                >
                  <div className="container py-[54px] min-h-screen  grid grid-rows-[68px_52px_214px_36px_166px_142px] gap-y-3  md:grid-cols-[463px_221px] md:grid-rows-[80px_167px_24px_120px] md:gap-x-5 md:gap-y-8 xl:grid-cols-[607px_292px_293px] xl:grid-rows-[137px_261px_168px] xl:gap-y-0">
                    <Title
                      title="We"
                      accent="Offer"
                      className="row-start-1  md:col-start-1 md:row-start-1"
                    />
                    <p className="row-start-2 my-0 h-full md:row-start-1 md:col-start-2 text-[43px] md:text-2xl-t  xl:text-2xl-d font-thin text-right md:text-left">
                      {id}
                      <span className="opacity-20">/05</span>
                    </p>
                    <Image
                      alt={title}
                      src={img}
                      width={280}
                      height={213}
                      className="mb-3 row-start-3 md:row-start-2 md:row-end-[span_4] w-full md:mb-0 md:h-[370px] xl:row-end-[span_2] xl:h-[429px]"
                    />
                    <p
                      className={`row-start-4 text-label font-extralight text-right mb-6 md:row-start-3 md:col-start-2 md:text-left xl:row-start-2 xl:col-start-3 `}
                    >
                      {losung}
                    </p>
                    {/* <SlideList
                      title={title}
                      activeSlide={idx}
                      onMenuButtonClick={handleMenuButtonClick}
                    /> */}
                    <p className="row-start-6 font-extralight text-base-m md:text-[13px] xl:text-base-d md:text-justify mt-auto md:row-start-4 md:col-start-2 md:self-end xl:row-start-3 xl:col-start-3">
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
