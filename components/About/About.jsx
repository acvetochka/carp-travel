import Section from '../Section';
import about from '../../data/about';
import Title from '../Title';

const About = () => {
  const { title, titleAccent, description, losung } = about;
  return (
    <Section id="about" className="about-bg">
      <div className="container grid gap-2">
        <Title title={title} accent={titleAccent} />
        {description.map(({ textAccent, text }, idx) => (
          <p
            key={idx}
            className={`text-base-m md:text-base-t xl:text-base-d font-extralight ${
              idx === 2 ? 'row-start-5' : 'w-[180px] mb-5'
            }`}
          >
            <span className="font-normal">{textAccent}</span>
            {text}
          </p>
        ))}
        <div className="justify-self-end w-[180px] mt-5 mb-10">
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
