'use client';

import Image from 'next/image';
import Title from './Title';
import { TbDiamondsFilled } from 'react-icons/tb';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const about = [
  {
    id: '01',
    bg: '/about/about-bg1.png',
    img: '/about/slide1.png',
    losung: 'Feel the adrenaline rush',
    title: 'ATVs Traveling',
    description:
      'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
  },
  {
    id: '02',
    bg: '/about/about-bg2.png',
    img: '/about/slide2.png',
    losung: 'Destroy your limitations',
    title: 'Rock climbing',
    description:
      'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.',
  },
  {
    id: '03',
    bg: '/about/about-bg3.png',
    img: '/about/slide3.png',
    losung: 'Get Inspired',
    title: 'Hot air ballooning',
    description:
      'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.',
  },
  {
    id: '04',
    bg: '/about/about-bg4.png',
    img: '/about/slide4.png',
    losung: 'Overcome your fears',
    title: 'Skydiving',
    description:
      "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
  },
  {
    id: '05',
    bg: '/about/about-bg5.png',
    img: '/about/slide5.png',
    losung: 'Trust the flow',
    title: 'Rafting',
    description:
      'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
  },
];

const menuSlider = [
  'ATVs Traveling',
  'Rock climbing',
  'Hot air ballooning',
  'Skydiving',
  'Rafting',
];

const SlideList = ({ title, handleClick }) => {
  return (
    <ul>
      {menuSlider.map((item, idx) => (
        <li key={idx + 1} className="flex items-center gap-2 uppercase">
          <button onClick={() => handleClick(idx)}>
            <TbDiamondsFilled
              size={10}
              className={`${item === title ? 'block' : 'hidden'}`}
            />
          </button>
          {item}
        </li>
      ))}
    </ul>
  );
};

const Background = ({ src }) => {
  return (
    <Image
      alt={losung}
      src={src}
      //   placeholder="blur"
      quality={100}
      fill
      //   sizes="100vw"
      //   width="100vw"
      //   height="100vh"
      style={{
        objectFit: 'cover',
      }}
    />
  );
};
const About = () => {
  const [swiper, setSwiper] = useState(null);

  const handleSlideChange = index => {
    if (swiper) {
      swiper.slideTo(index); // Переміщуємо Swiper до вказаного індексу слайда
    }
  };
  return (
    <>
      <section
        className="min-h-screen bg-opacity-75"
        data-section-id="about"
        id="about"
      >
        <Swiper
          effect={'fade'}
          onSwiper={s => setSwiper(s)} // Зберігаємо посилання на Swiper
          //   navigation={true}
          modules={[EffectFade]}
          // Додаємо навігаційні кнопки (можна замінити на свої)
        >
          {/* <Swiper> */}
          {about.map(({ id, bg, img, losung, title, description }) => (
            <div key={id} className="bg-black min-h-[542px] ">
              {/* <Background src={bg}> */}
              <SwiperSlide
                className="bg-cover bg-center"
                style={{
                  background: `linear-gradient(180deg, #001826 0%, rgba(0, 37, 49, 0.00) 100%), url(${bg})`,

                  //   backgroundImage: `url(${bg})`,
                  //   backgroundColor: 'rgba(2, 15, 8, 0.25)', // Шлях до зображення з папки public
                  backgroundColor: 'rgba(10, 24, 19, 1)',
                  minHeight: '650px',
                  //   opacity: '25%', // Мінімальна висота, щоб забезпечити фон на весь екран
                }}
              >
                <div className="container py-[54px]">
                  <Title title="We" accent="Offer" />
                  <p>
                    {id}
                    <span>/05</span>{' '}
                  </p>
                  <Image alt={title} src={img} width={280} height={213} />
                  <SlideList title={title} handleClick={handleSlideChange} />
                  <p>{description}</p>
                </div>
              </SwiperSlide>
              {/* </Background> */}
            </div>
          ))}
          {/* </Swiper> */}
        </Swiper>
      </section>
    </>
  );
};

export default About;
