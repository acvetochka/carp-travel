import PropTypes from 'prop-types';

export const CareerAdvantages = ({ advantages }) => {
  return (
    <ul className="flex flex-col gap-4 w-[181px] self-start text-right md:col-start-1 md:row-start-3 md:row-span-3 md:gap-6 md:w-full max-md:mb-[112px] xl:col-end-3 ">
      {advantages.map((item, idx) => {
        const { itemTitle, description } = item;
        return (
          <li key={idx} className="flex flex-col gap-2 xl:flex-row xl:gap-6">
            <h3 className="text-base-m md:text-base-t xl:text-base-d xl:w-[290px]">
              {itemTitle}
            </h3>
            <p className="text-label  tracking-normal max-xl:leading-5 font-extralight xl:w-[290px] xl:text-left">
              {description}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

CareerAdvantages.propTypes = {
  advantages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

