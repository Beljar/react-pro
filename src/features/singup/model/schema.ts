import zod from 'zod';

export const valuesSchema = zod
  .object({
    userName: zod.string().min(1, { message: 'User name is required' }),
    email: zod
      .string()
      .min(1, { message: 'Email name is required' })
      .includes('@', { message: 'Должно содержать символ @' }),
    password: zod
      .string()
      .min(1, { message: 'User name is required' })
      .min(6, { message: 'Password must be at least 6 characters long' }),
    passwordRepeat: zod.string().min(1, { message: 'User name is required' }),
  })
  .refine(
    (values) => {
      return values.password === values.passwordRepeat;
    },
    {
      message: 'The passwords do not match.',
      path: ['passwordRepeat'],
    }
  );
