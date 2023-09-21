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
          className="md:col-start-1 md:col-end-3 xl:col-end-2"
        />

        <p className="text-base-m font-extralight w-[179px] self-end md:row-start-1 md:col-start-3 ">
          {offer}
        </p>
        <span className="uppercase text-[30px] md:row-start-2 md:col-start-1 md:text-right">
          {span}
        </span>
        <CareerAdvantages advantages={advantages} />
        {/* <ul className="flex flex-col gap-4 w-[181px] self-start text-right">
          {advantages.map((item, idx) => {
            const { itemTitle, description } = item;
            return (
              <li key={idx} className="flex flex-col gap-2">
                <h3 className="text-base-m md:text-base-t xl:text-base-d">
                  {itemTitle}
                </h3>
                <p className="label font-extralight">{description}</p>
              </li>
            );
          })}
        </ul> */}
        <p>{call}</p>
        <CareerForm />
      </div>
    </Section>
  );
};

export default Career;
