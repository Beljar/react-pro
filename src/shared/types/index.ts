import zod from 'zod';

export const apiErrorSchema = zod.object({
  statusCode: zod.number(),
  message: zod.string(),
  error: zod.string(),
});

export type TApiError = zod.infer<typeof apiErrorSchema>;
