import { z } from "zod";

export const signupSchemaValidation = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    picture: z.string(),
  }),
});

export const loginSchemaValidation = z.object({
    body: z.object({
      email: z.string({ required_error: 'Email is Required' }).email(),
      password: z.string({ required_error: 'Password is Required' }),
    }),
  });