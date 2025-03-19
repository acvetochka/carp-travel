'use client';

import { HeroButton, HeroLosung, Section } from '@/components';
import text from '@/data/heroText.json';
// import Section from '../components/Section';
// import HeroLosung from '../components/Hero/HeroLosung';
// import HeroButton from '../components/Hero/HeroButton';

export const Hero = () => {
  const { losung, titleAccent, title, cities, description } = text;

  return (
    <Section className="hero-bg bg-opacity-75 pt-[106px] md:pt-[124px] xl:pt-[130px]">
      <div className="container flex flex-col gap-6 md:grid md:grid-cols-[426px_230px]  md:gap-y-0 md:grid-rows-[88px_56px_120px_28px_64px] xl:grid-cols-[646px_294px] xl:grid-rows-[123px_181px_120px_28px_64px] justify-between">
        <HeroLosung losung={losung} />
        <h1 className="uppercase font-thin text-title-m md:text-title-t xl:text-title-d md:col-start-1  md:row-start-1 md:row-end-4">
          <span className="font-medium"> {titleAccent}</span>
          {title}
        </h1>
        <p className="text-sm-m md:text-sm-t md:self-end md:tracking-[1.26px] font-extralight md:col-start-1 w-[70%] md:w-2/3 xl:w-full md:row-start-5">
          {cities}
        </p>
        <p className="text-base-m md:text-base-t font-extralight text-justify md:col-start-2 md:row-start-3">
          {description}
        </p>
        <HeroButton />
      </div>
    </Section>
  );
};
