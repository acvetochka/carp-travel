'use client';

import PropTypes from 'prop-types';
import { TbDiamondsFilled } from 'react-icons/tb';
import 'swiper/css';
import 'swiper/css/effect-fade';
import menuSlider from "@/data/menuSlider";

export const SlideList = ({ activeSlide, onMenuButtonClick }) => {
  return (
    <div className="absolute w-full py-[54px] md:py-[64px] xl:py-[104px]">
      <div className="container grid grid-rows-[394px_166px_130px] gap-y-6 md:grid-cols-[463px_221px] md:grid-rows-[80px_167px_24px_120px] md:gap-x-5 md:gap-y-8 xl:grid-cols-[607px_292px_293px] xl:grid-rows-[137px_261px_168px] xl:gap-y-0">
        <ul className="list-none p-0 flex flex-col gap-4 row-start-2 md:row-start-2 md:col-start-2 mb-5 z-[100]">
          {menuSlider.map((item, idx) => (
            <li
              key={item + idx}
              className={`flex items-center uppercase text-lg-m md:text-lg-t xl:text-lg-d font-extralight cursor-pointer ${
                idx === activeSlide
                  ? 'opacity-100 font-medium'
                  : ' opacity-50 hover:pl-1 hover:opacity-100 transition-all duration-500 easy-in-out'
              }`}
            >
              <button
                type="button"
                className="flex items-center uppercase text-left"
                onClick={() => onMenuButtonClick(idx)}
              >
                <TbDiamondsFilled
                  size={10}
                  className={`mr-2 ${
                    idx === activeSlide ? 'block opacity-100' : 'hidden'
                  }`}
                />
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

SlideList.propTypes = {
  activeSlide: PropTypes.number.isRequired,
  onMenuButtonClick: PropTypes.func.isRequired,
};

