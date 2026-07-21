import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { type SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import { type ValuesSchema, valuesSchema } from '../model';

import styles from './styles.module.scss';

export const Signup = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValuesSchema>({
    resolver: zodResolver(valuesSchema),
    mode: 'onBlur',
  });
  const onSubmit: SubmitHandler<ValuesSchema> = (data) => console.log(data);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'links',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.form_item}>
        <input
          {...register('userName')}
          className={clsx({ [styles.error]: errors.userName })}
        />
        <span className={styles.error_text}>{errors.userName?.message}</span>
      </div>

      <div className={styles.form_item}>
        <input
          {...register('email', { required: true })}
          className={clsx({ [styles.error]: errors.email })}
        />
        <span className={styles.error_text}>{errors.email?.message}</span>
      </div>

      <div className={styles.form_item}>
        <input
          {...register('password', { required: true })}
          className={clsx({ [styles.error]: errors.password })}
        />
        <span className={styles.error_text}>{errors.password?.message}</span>
      </div>

      <div className={styles.form_item}>
        <input
          {...register('passwordRepeat', { required: true })}
          className={clsx({ [styles.error]: errors.passwordRepeat })}
        />
        <span className={styles.error_text}>
          {errors.passwordRepeat?.message}
        </span>
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className={styles.form_item}>
          <div className={styles.form_item_links}>
            <div className={styles.form_item_links_input}>
              <input
                {...register(`links.${index}.link`)}
                className={clsx({
                  [styles.error]: errors.links?.[index]?.link,
                })}
              />
            </div>

            <button type="button" onClick={() => remove(index)}>
              x
            </button>
          </div>

          <span className={styles.error_text}>
            {errors.links?.[index]?.link?.message}
          </span>
        </div>
      ))}

      <div className={styles.form_item}>
        <button
          className={styles.form_item_button}
          type="button"
          onClick={() => append({ link: '' })}
        >
          Добавить ссылку
        </button>
      </div>
      <div className={styles.form_item}>
        <button className={styles.form_item_button} type="submit">
          Отправить
        </button>
      </div>
    </form>
  );
};
