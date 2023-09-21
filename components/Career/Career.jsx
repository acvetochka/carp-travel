// const { default: Section } = require('../Section');
import Section from '../Section';
import Title from '../Title';
import career from '../../data/career';
import CareerAdvantages from './CareerAdvantages';
import CareerForm from './CareerForm';

const Career = () => {
  const { title, titleAccent, span, advantages, call, offer } = career;
  return (
    <Section id="career" className="">
      <div className="container flex flex-col md:grid md:grid-cols-[221px_221px_221px] md:grid-rows-[92px_92px_92px_256px_60px] md:gap-x-5">
        <Title
          title={title}
          accent={titleAccent}
          className="max-md:mb-6 md:col-start-1 md:col-end-3 xl:col-end-2"
        />

        <p className="text-base-m font-extralight w-[179px] self-end md:row-start-1 md:col-start-3 md:w-full md:text-[13px]">
          {offer}
        </p>
        <span className="uppercase max-md:py-[36px] text-[30px] md:row-start-2 md:col-start-1 md:text-right">
          {span}
        </span>
        <CareerAdvantages advantages={advantages} />
        <p className="w-[179px] max-md:mb-6 md:w-full self-end md:row-start-3 md:col-start-2 text-base-m font-extralight md:text-[13px]">
          {call}
        </p>
        <CareerForm />
      </div>
    </Section>
  );
};

export default Career;
