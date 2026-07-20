import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { valuesSchema } from '../model';

import styles from './styles.module.scss';

type Inputs = {
  userName: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

export const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(valuesSchema),
    mode: 'onBlur',
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.form_item}>
        <input {...register('userName')} />
        {errors.userName && <span>{errors.userName.message}</span>}
      </div>

      <div className={styles.form_item}>
        <input {...register('email', { required: true })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className={styles.form_item}>
        <input {...register('password', { required: true })} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div className={styles.form_item}>
        <input {...register('passwordRepeat', { required: true })} />
        {errors.passwordRepeat && <span>{errors.passwordRepeat.message}</span>}
      </div>

      <input type="submit" />
    </form>
  );
};
