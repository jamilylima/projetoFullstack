import { z } from 'zod'

export const schema = z.object({
  email: z.string().email('Deve ser um e-mail'),
  name: z.string().min(3,"O nome é obrigatório e precida de no minímo 3 caracteres" ),
  telefone: z.string()
});

