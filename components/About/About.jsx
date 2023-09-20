import Section from '../Section';
import about from '../../data/about';
import Title from '../Title';

const About = () => {
  const { title, titleAccent, description, losung } = about;
  return (
    <Section id="about" className="about-bg">
      <div className="container grid gap-2 md:grid-cols-[218px_266px_220px] md:grid-rows-[240px_180px_117px] md:gap-x-0 md:gap-y-4 xl:grid-cols-[50%_25%_25%] xl:grid-rows-[256px_192px_120px]">
        <Title
          title={title}
          accent={titleAccent}
          className="md:col-start-1 md:col-end-3 xl:col-end-2"
        />
        {description.map(({ textAccent, text }, idx) => (
          <p
            key={idx}
            className={`text-base-m md:text-base-t xl:text-base-d font-extralight ${
              idx === 2
                ? 'row-start-5  md:row-start-3 md:col-start-2 md:col-span-2 md:self-end xl:col-start-1 xl:col-end-2'
                : 'w-[180px] mb-5 md:w-full md:col-start-3 xl:col-start-2 xl:pl-6'
            } ${idx === 0 && ' md:row-start-1 md:pt-[9px] md:m-0 xl:pt-4'} ${
              idx === 1 && 'md:row-start-2'
            }`}
          >
            <span className="font-normal">{textAccent}</span>
            {text}
          </p>
        ))}
        <div className="justify-self-end w-[180px] mt-5 mb-10 md:row-start-2 md:w-full md:self-end md:m-0 xl:row-start-3 xl:col-start-3 xl:pl-[13px]">
          {losung.map((item, idx) => (
            <p
              key={idx}
              className={`text-base-m md:text-base-t xl:text-base-d  ${
                idx === 2
                  ? 'lowercase tracking-[-0.14px] font-extralight row-start-4'
                  : 'uppercase'
              } ${idx === 1 && 'text-right'}`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
