import career from '@/data/career';

export const Checkbox = () => {
  return (
    <div className="flex gap-2  max-md:mb-4">
      <input
        id="check"
        type="checkbox"
        className="form-checkbox  bg-white/5 text-white form-checkbox:checked:bg-white"
      />
      <label htmlFor="check" className="font-extralight text-[13px]">
        {career.checkbox}
      </label>
      </div>
      
  );
};
