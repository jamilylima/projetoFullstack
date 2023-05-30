import { z } from "zod"


const contatoSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    telefone: z.string(),
    created: z.date(),
    contatoId: z.string()
    
})


const contatoSchemaRequest = contatoSchema.omit({
    id: true,
    created: true,
    contatoId:true
})




export {contatoSchema,contatoSchemaRequest}