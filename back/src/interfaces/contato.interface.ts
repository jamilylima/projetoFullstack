import {  z } from "zod"
import { DeepPartial } from "typeorm"
import { contatoSchema, contatoSchemaRequest, contatosSchemaResponse } from "../schemas/contato.schema"



type ContatosRequest = z.infer<typeof contatoSchemaRequest>
type TContatoResponse = z.infer<typeof contatoSchema>
type ContatoResponseList = z.infer<typeof contatosSchemaResponse>
type TContatoUpdateRequest = DeepPartial<ContatosRequest>


export {ContatosRequest,TContatoResponse,TContatoUpdateRequest,ContatoResponseList}