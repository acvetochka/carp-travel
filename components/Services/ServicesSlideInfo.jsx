import Image from 'next/image';

import Title from '../Title';

const ServicesSlideInfo = ({ item, idx }) => {
  const { id, img, losung, title, description } = item;
  return (
    <div className="container grid grid-rows-[68px_52px_214px_36px_166px_142px] gap-y-3  md:grid-cols-[463px_221px] md:grid-rows-[80px_167px_24px_120px] md:gap-x-5 md:gap-y-8 xl:grid-cols-[607px_292px_293px] xl:grid-rows-[137px_261px_168px] xl:gap-y-0">
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
      <div
        className={`row-start-4 text-label font-extralight text-right mb-6 md:row-start-3 md:col-start-2 md:text-left xl:row-start-2 xl:col-start-3 mt-[-5px] losung`}
        style={{
          paddingTop: `${idx <= 2 ? `${idx * 40}px` : `${idx * 40 + 24}px`}`,
        }}
      >
        <p>{losung}</p>
      </div>
      <p className="row-start-6 font-extralight text-base-m md:text-[13px] xl:text-base-d md:text-justify mt-auto md:row-start-4 md:col-start-2 md:self-end xl:row-start-3 xl:col-start-3">
        {description}
      </p>
    </div>
  );
};

export default ServicesSlideInfo;
