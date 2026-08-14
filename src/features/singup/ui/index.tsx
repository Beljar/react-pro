import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { type SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import { Button, TextInput } from 'shared/ui';

import { type ValuesSchema, valuesSchema } from '../model';

import styles from './styles.module.scss';

export const Signup = () => {
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

  const [lastSubmittedData, setLastSubmittedData] =
    useState<ValuesSchema | null>(null);

  const stringifiedData = useMemo(() => {
    try {
      return lastSubmittedData
        ? JSON.stringify(lastSubmittedData, null, 2)
        : '';
    } catch (error) {
      console.error('Error stringifying data:', error);
      return 'Error stringifying data';
    }
  }, [lastSubmittedData]);

  const onSubmit: SubmitHandler<ValuesSchema> = (data) => {
    console.log(data);
    setLastSubmittedData(data);
    reset();
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'links',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.form_item}>
        <TextInput
          {...register('userName')}
          className={clsx({ [styles.error]: errors.userName })}
          error={errors.userName?.message}
          placeholder="Имя пользователя"
        />
      </div>

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
        />
      </div>

      <div className={styles.form_item}>
        <TextInput
          {...register('passwordRepeat', { required: true })}
          className={clsx({ [styles.error]: errors.passwordRepeat })}
          error={errors.passwordRepeat?.message}
          placeholder="Повторите пароль"
        />
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className={styles.form_item}>
          <div className={styles.form_item_links}>
            <div className={styles.form_item_links_input}>
              <TextInput
                {...register(`links.${index}.link`)}
                className={clsx({
                  [styles.error]: errors.links?.[index]?.link,
                })}
                error={errors.links?.[index]?.link?.message}
                placeholder="Ссылка на соцсеть"
              />
            </div>

            <Button
              type="button"
              onClick={() => remove(index)}
              variant="secondary"
            >
              x
            </Button>
          </div>
        </div>
      ))}

      <div className={styles.form_item}>
        <Button type="button" onClick={() => append({ link: '' })}>
          Добавить ссылку
        </Button>
      </div>
      <div className={styles.form_item}>
        <Button type="submit">Отправить</Button>
      </div>
      {stringifiedData && (
        <div className={styles.form_item}>
          <p>Last submitted data:</p>
          <pre>{stringifiedData}</pre>
        </div>
      )}
    </form>
  );
};
