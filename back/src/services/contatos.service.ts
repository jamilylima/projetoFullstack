  
import { ContatosRequest } from "../interfaces/contato.interface";
import { Contato } from "../entities/contatos.entitie";
import { AppDataSource } from "../../src/data-source"
import { Cliente } from "../entities/cliente.entitie";
import { AppError } from "../errors/AppError";






const createContatoService = async (clienteId: string, {
  name, telefone, email,}:ContatosRequest
): Promise<Contato> => {
  
    const clienteRepository = AppDataSource.getRepository(Cliente);
    const contatoRepository = AppDataSource.getRepository(Contato);
  
  
    const cliente = await clienteRepository.findOneBy({
      id: clienteId
  })
  
  const contato = contatoRepository.create({
    name,
    telefone,
    email,
    cliente: cliente!
    }
     
  )
  await contatoRepository.save(contato)
  
  
  return contato
};
  


const listContatosClienteService = async ():Promise<Contato[]> => {
  const contatoRepository = AppDataSource.getRepository(Contato)
  const contatos = await contatoRepository.find()
  return contatos
};



const updateContatoService = async (id:string, name:string,
  email:string,
  telefone:string): Promise<ContatosRequest> => {
  
  const contatoRepository = AppDataSource.getRepository(Contato);
  
  const contatoId:Contato| null = await contatoRepository.findOneBy({ id:id });
  
  if (!contatoId) {
      throw new AppError( "Contact not found",400);
  }
  

  const newContato =  contatoRepository.create({
    ...contatoId,
    name,
    email,
    telefone,
    
});
  
  await contatoRepository.save(newContato)


  return newContato
};


const deletecontatoService = async(id: string)=> {

  const contatoRepository = AppDataSource.getRepository(Contato)

  const contatop  = await contatoRepository.find()

  const contato = contatop.find(contato => contato.id === id)
  
  if(!contato){
        throw new AppError( "Contact not found",404)
  }

  await contatoRepository.remove(contato)
    
  
}    



export  {createContatoService,listContatosClienteService,updateContatoService,deletecontatoService}