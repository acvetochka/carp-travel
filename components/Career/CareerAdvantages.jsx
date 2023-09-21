const CareerAdvantages = ({ advantages }) => {
  return (
    <ul className="flex flex-col gap-4 w-[181px] self-start text-right md:col-start-1 md:row-start-3 md:row-span-3 md:gap-6 md:w-full">
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
    </ul>
  );
};

export default CareerAdvantages;
