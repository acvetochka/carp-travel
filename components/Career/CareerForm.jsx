'use client';

import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import Notiflix from 'notiflix';

import FormInput from '../FormInput';
import PhoneInput from './PhoneInput';
import Textarea from '../Textarea';
import SendButton from '../SendButton';
import Checkbox from './Checkbox';

const CareerForm = () => {
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
      position: '',
      phone: '',
    },
  });

  useFormPersist('careerForm', {
    watch,
    setValue,
  });

  const onSubmit = data => {
    if (!data.email || !data.name || !data.phone) {
      Notiflix.Notify.failure('Fill in the required fields');
    } else {
      setValue('name', '');
      setValue('email', '');
      setValue('phone', '');
      setValue('position', '');
      Notiflix.Notify.success('Message sent successfully');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:col-start-2 md:col-span-2 md:row-start-4 md:row-span-2 md:grid md:grid-row-[265px_53px] md:gap-x-5 md:grid-cols-[221px_221px] xl:col-start-3 xl:row-start-3 xl:grid-cols-[290px_290px] xl:gap-x-6"
    >
      <div className="md:col-start-1 md:row-start-1 flex flex-col gap-4 xl:gap-[26px] max-md:mb-4">
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
        <FormInput
          label="Position"
          type="text"
          name="position"
          placeholder="Movie maker"
          register={register}
          errors={errors}
          required="false"
        />

        <PhoneInput name="phone" errors={errors} register={register} />
      </div>
      <Textarea
        className="md:col-start-2 md:row-start-1"
        customStyle="h-full xl:h-[268px]"
      />
      <Checkbox className="md:col-start-1 md:row-start-2" />
      <div className="flex justify-end md:col-start-2 md:row-start-2 self-start">
        <SendButton />
      </div>
    </form>
  );
};

export default CareerForm;
