import { z } from "zod"

export const MessageSchema = z.object({
    content: z.string().min(10, { message: "Content must be atleast 10 character" })
        .max(300, { message: "content must not be more than 300 character" })
})