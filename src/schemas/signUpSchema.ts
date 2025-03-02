import { z } from 'zod'

export const usernameValidation = z.string().min(2, { message: "Username must be atleast 2 characters" })
    .max(20, { message: "Username must be no more than 20 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Username must not contain special characters" })

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "invalid email" }),
    password: z.string().min(8, { message: "password must be atleast 8 character" })
})