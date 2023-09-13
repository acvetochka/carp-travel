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

const About = () => {
  return (
    <>
      <section
        className="min-h-screen bg-opacity-75"
        data-section-id="about"
        id="about"
      >
        <div className="container"></div>
      </section>
    </>
  );
};

export default About;
