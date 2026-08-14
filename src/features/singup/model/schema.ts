import zod from 'zod';

const REQUIRED_MESSAGE = 'Поле обязательно';

export const valuesSchema = zod
  .object({
    userName: zod.string().min(1, { message: REQUIRED_MESSAGE }),
    email: zod
      .string()
      .min(1, { message: REQUIRED_MESSAGE })
      .includes('@', { message: 'Email должен содержать символ @' }),
    password: zod
      .string()
      .min(1, { message: REQUIRED_MESSAGE })
      .min(6, { message: 'Пароль должен содержать не менее 6 символов' }),
    passwordRepeat: zod.string().min(1, { message: REQUIRED_MESSAGE }),
    links: zod.array(
      zod.object({
        link: zod
          .string()
          .min(1, { message: REQUIRED_MESSAGE })
          .url('Некорректный URL'),
      })
    ),
  })
  .refine(
    (values) => {
      return values.password === values.passwordRepeat;
    },
    {
      message: 'Пароли не совпадают.',
      path: ['passwordRepeat'],
    }
  );

export type ValuesSchema = zod.infer<typeof valuesSchema>;
