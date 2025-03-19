import { CareerAdvantages, CareerForm, Section, Title } from '@/components';
import career from '@/data/career';

// import Section from '../components/Section';
// import Title from '../components/Title';
// import CareerAdvantages from '../components/Career/CareerAdvantages';
// import CareerForm from '../components/Career/CareerForm';

export const Career = () => {
  const { title, titleAccent, span, advantages, call, offer } = career;
  return (
    <Section id="career" className="career-bg">
      <div className="container flex flex-col md:grid md:grid-cols-[221px_221px_221px] md:grid-rows-[92px_92px_92px_256px_60px] md:gap-x-5 xl:gap-x-6 xl:grid-cols-[290px_290px_290px_290px] xl:grid-rows-[143px_86px_321px_60px]">
        <Title
          title={title}
          accent={titleAccent}
          className="max-md:mb-6 md:col-start-1 md:col-end-3 "
        />

        <p className="text-base-m font-extralight w-[179px] self-end md:row-start-1 md:col-start-3 md:w-full md:text-[13px] xl:col-start-4 xl:self-start xl:pt-4 xl:text-base-d">
          {offer}
        </p>
        <span className="uppercase max-md:py-[36px] text-[30px] md:row-start-2 md:col-start-1 md:text-right">
          {span}
        </span>
        <CareerAdvantages advantages={advantages} />
        <p className="w-[179px] max-md:mb-6 md:w-full self-end md:row-start-3 md:col-start-2 text-base-m font-extralight md:text-[13px] xl:col-start-3 xl:row-start-2 xl:w-[234px] xl:text-base-d md:self-start">
          {call}
        </p>
        <CareerForm />
      </div>
    </Section>
  );
};

