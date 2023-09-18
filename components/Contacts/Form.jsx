'use client';

import { useForm } from 'react-hook-form';
import FormInput from '../FormInput';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    if (errors) {
      console.log(errors);
    }
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col my-4 gap-[25px] md:gap-5 md:flex-row md:w-full xl:flex-col xl:w-1/2 xl:gap-10 xl:my-0"
    >
      <div className="flex flex-col md:w-[221px] gap-6 md:gap-7 xl:flex-row xl:gap-5 xl:w-full">
        <FormInput
          label="Full name"
          type="text"
          name="name"
          placeholder="John Smith"
          register={register}
          errors={errors}
          textError={'Incorrect name'}
        />
        <FormInput
          label="E-mail"
          type="email"
          name="email"
          placeholder="johnsmith@email.com"
          register={register}
          errors={errors}
          textError={'Invalid email'}
        />
      </div>
      <div className="flex-1">
        <label className="flex flex-col text-label font-extralight mb-4">
          Message
          <textarea
            name="message"
            className="resize-none placeholder:text-[13px] bg-white/5 focus:bg-white/10  border-none h-[196px] md:h-[221px] xl:h-[174px]"
          ></textarea>
        </label>
        <button type="submit" className="text-xl-m uppercase text-right w-full">
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
