import { Request, Response } from "express"
import { handleError } from "../errors/AppError"
import { createContatoService, deletecontatoService, listContatosClienteService,updateContatoService} from "../services/contatos.service";
import { TContatoUpdateRequest } from "../interfaces/contato.interface";
import { Cliente } from "../entities/cliente.entitie";






const createContatosController = async (req: Request, res: Response) => {
    try {

      const clienteId = req.params.id
  
     
      const response = await createContatoService( clienteId,req.body);
  
      return res.status(201).json(response);
    }  catch (error: any) {
      handleError(error, res);
    }
};
  



const listContatosIdController = async (req: Request, res: Response) => {
    const clienteid = res.locals.userId
    
    const contatos = await listContatosClienteService(clienteid)
    return res.json(contatos)
  
}


const updateContatoController = async (req: Request, res: Response) => {
  try {
    const  id  = req.params.id;
    const updateRequest:TContatoUpdateRequest = req.body;

    const UpdatedContato = await updateContatoService(id, updateRequest)
    return res.status(200).json(UpdatedContato);
  } catch (error: any) {
    handleError(error, res);
  }

};

const deleteContatoController = async (req: Request, res: Response) => {
  try {
    const id  = req.params.id;
    const result = await deletecontatoService (id);
    

    return res.status(204).send(result);

  }  catch (error: any) {
    handleError(error, res);
  }
};


  export  {createContatosController,listContatosIdController,updateContatoController,deleteContatoController};




