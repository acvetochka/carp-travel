import career from '../../data/career';

const Checkbox = () => {
  return (
    <div className="flex gap-2  max-md:mb-4">
      <input id="check" type="checkbox" className="form-checkbox" />
      <label htmlFor="check" className="font-extralight text-[13px]">
        {career.checkbox}
      </label>
    </div>
  );
};

export default Checkbox;
