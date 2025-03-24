'use client';

import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import Notiflix from 'notiflix';
import { FormInput } from '../FormInput';
import { Textarea } from '../Textarea';
import { SendButton } from '../SendButton';

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
    },
  });

  useFormPersist('form', {
    watch,
    setValue,
    include: ['name', 'email'],
  });

  const onSubmit = data => {
    if (!data.email || !data.name) {
      Notiflix.Notify.failure('Fill in the required fields');
    } else {
      setValue('name', '');
      setValue('email', '');
      Notiflix.Notify.success('Message sent successfully');
    }
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
      <div className="flex-1 flex w-full flex-col">
        <Textarea customStyle="h-[196px] md:h-[221px] xl:h-[174px]" />
        <SendButton />
      </div>
    </form>
  );
};

