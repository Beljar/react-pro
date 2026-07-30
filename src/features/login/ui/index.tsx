import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import React, { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { apiErrorSchema, type TApiError } from 'shared/types';
import { Button, TextInput } from 'shared/ui';

import { authLoginPost } from 'entities/auth';
import type { IAuthLoginPostResponse } from 'entities/auth/model';

import { type ValuesSchema, valuesSchema } from '../model';

import styles from './styles.module.scss';

interface ILoginProps {
  onSuccess?: (authData: IAuthLoginPostResponse) => void;
}

export const Login: React.FC<ILoginProps> = ({ onSuccess }) => {
  const [error, setError] = useState<TApiError | undefined>();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ValuesSchema>({
    resolver: zodResolver(valuesSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<ValuesSchema> = async (data) => {
    try {
      const result = await authLoginPost(data);
      onSuccess?.(result.data);
    } catch (e) {
      const parsedError = apiErrorSchema.safeParse(e);
      setError(parsedError.data);
    }

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.form_item}>
        <TextInput
          {...register('email', { required: true })}
          className={clsx({ [styles.error]: errors.email })}
          error={errors.email?.message}
          placeholder="Email"
        />
      </div>

      <div className={styles.form_item}>
        <TextInput
          {...register('password', { required: true })}
          className={clsx({ [styles.error]: errors.password })}
          error={errors.password?.message}
          placeholder="Пароль"
          type="password"
        />
      </div>

      <div className={styles.form_item}>
        <Button type="submit">Войти</Button>
      </div>
    </form>
  );
};
