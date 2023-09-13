'use client';

import { Link } from 'react-scroll';
import styles from '../styles/button.module.css';

const Hero = () => {
  return (
    <section className="hero-bg bg-opacity-75 pt-[106px] md:pt-[124px] xl:pt-[130px] min-h-screen py-14 md:py-16 xl:py-20">
      <div className="container flex flex-col gap-6 md:grid md:grid-cols-[426px_230px]  md:gap-y-0 md:grid-rows-[88px_56px_120px_28px_64px] xl:grid-cols-[646px_294px] xl:grid-rows-[123px_181px_120px_28px_64px] justify-between">
        <div className="flex justify-end md:col-start-2">
          <div className="relative self-start right-[-9.48px]  md:right-[-25.9px] xl:right-[-36.48px]">
            <p className="relative text-justify font-thin uppercase leading-[normal] text-[37px] md:text-[67px] xl:text-[98px] tracking-[1.665px] md:tracking-[8.71px] xl:tracking-[2px]">
              <span className="font-medium tracking-normal">7</span>days
            </p>
            <p className="uppercase font-light  text-pos-m md:text-pos-t xl:text-pos-d relative bottom-2 text-justify">
              journey
            </p>
          </div>
        </div>
        <h1 className="uppercase font-thin text-title-m  md:text-title-t xl:text-title-d md:col-start-1  md:row-start-1 md:row-end-4">
          <span className="font-medium">Uncover</span> Carpathian’s Secrets
        </h1>
        <p className="text-sm-m md:text-sm-t md:self-end md:tracking-[1.26px] font-extralight md:col-start-1 w-[70%] md:w-2/3 xl:w-full md:row-start-5">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
        <p className="text-base-m md:text-base-t font-extralight text-justify md:col-start-2 md:row-start-3">
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        <div className={`md:col-start-2 md:row-start-5 ${styles.button}`}>
          <button className={` text-btn-m font-bold ${styles.buttonReverse}`}>
            <Link
              className="w-full hover:backdrop-opacity-20"
              to="contacts"
              spy={true}
              smooth={true}
              duration={1500}
            >
              Join Now
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
