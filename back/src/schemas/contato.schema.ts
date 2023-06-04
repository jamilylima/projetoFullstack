import { z } from "zod"


const contatoSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    telefone: z.string(),
    created: z.date(),
    contatoId: z.string()
    
})

const contatoSchemaa = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    telefone: z.string(),
    created: z.date(),
   
    
})

const contatoResponse = contatoSchema.omit({
 contatoId:true
})

const contatoSchemaRequest = contatoSchema.omit({
    id: true,
    created: true,
    contatoId:true
})

const contatoSchemaUpdate = contatoSchema.omit({
    id: true
}).partial()

const contatosSchemaResponse = z.array(contatoSchemaa)




export {contatoSchema,contatoSchemaRequest,contatoResponse,contatosSchemaResponse,contatoSchemaUpdate}