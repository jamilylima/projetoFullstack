  
import {  ContatoResponseList, ContatosRequest, TContatoUpdateRequest} from "../interfaces/contato.interface";
import { Contato } from "../entities/contatos.entitie";
import { AppDataSource } from "../../src/data-source"
import { Cliente } from "../entities/cliente.entitie";
import { AppError } from "../errors/AppError";
import { contatoResponse,  contatoSchemaUpdate, contatosSchemaResponse } from "../schemas/contato.schema";






const createContatoService = async (clienteId: string, {
  name, telefone, email,}:ContatosRequest
) => {
  
    const clienteRepository = AppDataSource.getRepository(Cliente);
    const contatoRepository = AppDataSource.getRepository(Contato);
    
  
    const cliente = await clienteRepository.findOneBy
({
      id: clienteId
    }
    )
   
   
    
    const contato = contatoRepository.create({
      name,
      telefone,
      email,
      cliente: cliente!
    }
    
    )
    
  await contatoRepository.save(contato)
  

  return contatoResponse.parse(contato)
};
  



const listContatosClienteService = async (id: string): Promise<ContatoResponseList> => {
  
  const contatoRepository = AppDataSource.getRepository(Contato)
  const clienteRepository = AppDataSource.getRepository(Cliente)

  const cliente: Cliente | null = await clienteRepository.findOneBy({
    id: id
  })
  
  if (!cliente) {
    throw new AppError("Cliente not found", 404)
}

  const contatos: Contato[] = await contatoRepository.find({
    where: {
        cliente: cliente
    }
})
  return contatosSchemaResponse.parse(contatos)
};






const updateContatoService = async (id:string, data:TContatoUpdateRequest)=> {
  
  const contatoRepository = AppDataSource.getRepository(Contato);
  
  const contatoId:Contato| null = await contatoRepository.findOneBy({ id:id });
  
  if (!contatoId) {
      throw new AppError( "Contact not found",400);
  }
  
  const newContato =  contatoRepository.create({
    ...contatoId,
    ...data
    
});
  
  await contatoRepository.save(newContato)
  
  return contatoSchemaUpdate.parse(newContato)
};


const deletecontatoService = async(id: string)=> {

  const contatoRepository = AppDataSource.getRepository(Contato)

  const contato: Contato | null = await contatoRepository.findOneBy({ id: id })
 
  if(!contato){
        throw new AppError( "Contact not found",404)
  }

  await contatoRepository.remove(contato)
    
  
}    



export  {createContatoService,listContatosClienteService,updateContatoService,deletecontatoService}