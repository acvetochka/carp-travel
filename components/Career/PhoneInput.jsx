import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import { IoCloseOutline } from 'react-icons/io5';

function PhoneInput({ register, errors, name }) {
  const countryCode = '+ 38';

  return (
    <div className="w-full relative">
      <span className="absolute top-[50%] left-2 text-[13px] leading-6 font-extralight ">
        {countryCode}
      </span>
      <label
        htmlFor="phone"
        className={`flex flex-col text-label font-extralight ${
          errors[name] && 'text-red-500'
        }`}
      >
        Phone Number:
      </label>
      <InputMask
        mask="(999) 99 99 999"
        maskChar="_"
        type="tel"
        id="phone"
        name="phone"
        placeholder="(097) 12 34 567"
        {...register('phone', {
          required: true,
          minLength: 15,
          maxLength: 15,
          pattern: {
            value: '^(\\d{3}) \\d{2} \\d{2} \\d{3}$',
            message: 'Invalid phone number format',
          },
        })}
        errors={errors}
        className={`form-input w-full pl-10 placeholder:text-[13px] placeholder:text-white/20  bg-white/5 focus:bg-white/10 border-none font-extralight md:h-6 xl:h-7 text-[13px] 
        ${errors[name] ? 'border-[#FF5757] text-[#FF5757]' : 'border-none'}
        `}
      />
      {errors[name] && (
        <span className="flex absolute right-0 justify-end items-center text-[#FF5757] text-right text-label text-red font-extralight">
          <IoCloseOutline size={18} /> Incorrect phone
        </span>
      )}
    </div>
  );
}

PhoneInput.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default PhoneInput;
