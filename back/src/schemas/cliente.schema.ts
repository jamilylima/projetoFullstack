import { z } from "zod"



const clienteSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    telefone:z.string(),
    created: z.date()
    
});


const clienteSchemaResponse = clienteSchema.omit({
    password:true
})


const clienteSchemaRequest = clienteSchema.omit({
    id: true,
    created:true
})





export { clienteSchema, clienteSchemaRequest,clienteSchemaResponse  }