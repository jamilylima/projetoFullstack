import { Request, Response } from "express"
import { handleError } from "../errors/AppError"
import { createContatoService, deletecontatoService, listContatosClienteService,updateContatoService} from "../services/contatos.service";






const createContatosController = async (req: Request, res: Response) => {
    try {
      const { name, telefone,email } = req.body;
      const  {clienteId } = req.params
  
      const response = await createContatoService( clienteId,{name, telefone, email});
  
      return res.status(201).json(response);
    }  catch (error: any) {
      handleError(error, res);
    }
};
  



const listContatosIdController = async (req: Request, res: Response) => {

    const contatos = await listContatosClienteService()
    return res.json(contatos)
  
}


const updateContatoController = async (req: Request, res: Response) => {
  try {
    const  id  = req.params.id;
    const { nome,email,telefone } = req.body;

    const UpdatedContato = await updateContatoService(id, nome, email, telefone);
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




