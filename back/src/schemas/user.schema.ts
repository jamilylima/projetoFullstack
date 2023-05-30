import { z } from "zod"



const userSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
})

const userSchemalogin = z.object({
    email: z.string().email(),
    password: z.string()
})



export{userSchema, userSchemalogin}