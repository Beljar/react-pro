import zod from 'zod';

const REQUIRED_MESSAGE = 'Поле обязательно';

export const valuesSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: REQUIRED_MESSAGE })
    .includes('@', { message: 'Email должен содержать символ @' }),
  password: zod.string().min(1, { message: REQUIRED_MESSAGE }),
});

export type ValuesSchema = zod.infer<typeof valuesSchema>;
