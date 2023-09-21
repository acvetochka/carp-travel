'use client';

import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import Notiflix from 'notiflix';

import FormInput from '../FormInput';
import PhoneInput from './PhoneInput';
import Textarea from '../Textarea';
import SendButton from '../SendButton';

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
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Textarea />
      <SendButton />
    </form>
  );
};

export default CareerForm;
