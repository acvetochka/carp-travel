import { IoCloseOutline } from 'react-icons/io5';

const pattern = {
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  name: /^[A-Za-zА-Яа-яЁё\s]{5}/,
};

const FormInput = ({
  label,
  type,
  name,
  placeholder,
  register,
  errors,
  textError = null,
  className = '',
  required = true,
}) => (
  <div className="w-full relative">
    <label
      className={`flex flex-col text-label font-extralight ${
        errors[name] && 'text-red-500'
      }`}
    >
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, {
        required: { required },
        pattern: pattern[name],
      })}
      className={`form-input w-full placeholder:text-[13px] placeholder:text-white/20  bg-white/5 focus:bg-white/10 border-none font-extralight md:h-6 xl:h-7 text-[13px] ${
        errors[name] ? 'border-[#FF5757] text-[#FF5757]' : 'border-none'
      } ${className}`}
    />
    {errors[name] && (
      <span className="flex absolute right-0 justify-end items-center text-[#FF5757] text-right text-label text-red font-extralight">
        <IoCloseOutline size={18} /> {textError}
      </span>
    )}
  </div>
);

export default FormInput;
