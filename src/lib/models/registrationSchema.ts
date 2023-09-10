import { z } from 'zod';

export const registrationSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  age: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((age) => !isNaN(age) && age >= 0 && age <= 100, {
      message: 'Age must be a valid number between 0 and 100',
    }),
  location: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6),
});

export type RegistrationType = z.infer<typeof registrationSchema>;
