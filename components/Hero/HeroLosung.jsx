import PropTypes from 'prop-types';

export const HeroLosung = ({ losung }) => {
  return (
    <div className="flex justify-end md:col-start-2">
      <div className="relative self-start right-[-9.48px]  md:right-[-25.9px] xl:right-[-36.48px]">
        <p className="relative text-justify font-thin uppercase leading-[normal] text-[37px] md:text-[67px] xl:text-[98px] tracking-[1.665px] md:tracking-[8.71px] xl:tracking-[2px]">
          <span className="font-medium tracking-normal">{losung[0]}</span>
          {losung[1]}
        </p>
        <p className="uppercase font-light  text-pos-m md:text-pos-t xl:text-pos-d relative bottom-2 text-justify">
          {losung[2]}
        </p>
      </div>
    </div>
  );
};

HeroLosung.propTypes = {
  losung: PropTypes.arrayOf(PropTypes.string).isRequired,
};

