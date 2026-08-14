import { z } from 'zod';

export const schema = z.object({
  step: z.number().min(1).max(3),
  email: z.string().min(1, { message: 'Введите email' }),
  newsletter: z.boolean().optional(),
  promo: z.boolean().optional(),
  partner: z.boolean().optional(),
});

export type FormFieldsValues = z.infer<typeof schema>;

export type FormState = {
  step: number;
  data: Partial<FormFieldsValues>;
  error: string | null;
  success?: boolean;
};
