import { Request, Response } from "express"
import { clienteLoginService, createClienteService, listClienteService, listClientesService, updateClienteService } from "../services/cliente.service"
import {  TClienteRequest } from "../interfaces/cliente.interface"
import { handleError } from "../errors/AppError"
import { IUserloginRequest } from "../interfaces/user.interface"


const createClienteController = async (req: Request, res: Response) => {
    try {
        const { name,email, password ,telefone}: TClienteRequest= req.body
        const cliente= await createClienteService({ name,email,telefone, password })

        return res.status(201).json(cliente);
    } catch (error: any) {
        handleError(error, res);
    }
}


const loginClienteController = async (req: Request, res: Response) => {
    try {
      const { email, password }: IUserloginRequest = req.body;
      const login = await clienteLoginService({ email, password });
      return res.status(200).json(login);
    } catch (error: any) {
      handleError(error, res);
    }
  };




  
const listClienteController = async (req: Request, res: Response) => {
    try {
      const clientes= await listClientesService();
      return res.status(200).json(clientes);
    }  catch (error: any) {
      handleError(error, res);
    }
};
  

const clienteListController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cliente = await listClienteService(id);
    return res.json(cliente);
  } catch (error: any) {
    handleError(error, res);
  }
  
}


const updateClienteController = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const { name,email,telefone } = req.body;

      const UpdatedCLiente = await updateClienteService(id, name, email, telefone);
      return res.status(200).json(UpdatedCLiente);
    } catch (error: any) {
      handleError(error, res);
    }

};
  


export{createClienteController,loginClienteController,listClienteController, clienteListController,updateClienteController}

