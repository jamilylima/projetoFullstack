import { AppDataSource } from "../../src/data-source"
import { TCliente, TClienteRequest, TClienteResponse } from "../interfaces/cliente.interface"
import { hash } from "bcryptjs";
import { Cliente } from "../entities/cliente.entitie";
import {  clienteSchemaResponse } from "../schemas/cliente.schema";
import { AppError, handleError } from "../errors/AppError";
import { IUserloginRequest } from "../interfaces/user.interface";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config"
import { error } from "console";





const createClienteService = async (data: TClienteRequest): Promise <TClienteResponse> => {
    const { name,email,password, telefone} = data
    const clienteRepository = AppDataSource.getRepository(Cliente)
    const findCliente = await clienteRepository.findOne({
        where: {
            email
        }
    })

    if (findCliente) {
        throw new AppError("Cliente already exists", 409)
    }

    const hashedPassword = await hash(password, 10)

    const cliente = clienteRepository.create({
        name,
        email,
        telefone,
        created:new Date(),
        password: hashedPassword,
    })

    await clienteRepository.save(cliente)

    return clienteSchemaResponse.parse(cliente)
}



const clienteLoginService = async ({ email, password }: IUserloginRequest):Promise<string> => {
    const clienteDb = AppDataSource.getRepository(Cliente);
  
    const clientes = await clienteDb.find();
  
    const account = clientes.find((cliente) => cliente.email === email);
    console.log(account)
  
    if (!account) {
      throw new AppError( "Email ou senha errado",404);
    }
    const passwordMatch = await compare(password, account.password)

    if (!passwordMatch) {
        throw new AppError("Invalid credentials", 403)
    }
  
    const token = jwt.sign({ email: email }, String(process.env.SECRET_KEY), {
      expiresIn: "1d",
    });
  
    return token;
};


const listClientesService = async():Promise<Cliente[]> => {

    const clienteRepository = AppDataSource.getRepository(Cliente);
    const clientList = await clienteRepository.find();

    return clientList;
    
};




const listClienteService = async (id: string) => {
    const clienteDb = AppDataSource.getRepository(Cliente);
    return await clienteDb.findOneBy({ id: id });
};


const updateClienteService = async (id:string, name:string,
    email:string,
    telefone:string): Promise<TClienteResponse> => {
    
    const clienteRepository = AppDataSource.getRepository(Cliente);
    
    const clienteId: Cliente|null = await  clienteRepository.findOneBy({ id:id });
    
    if (!clienteId) {
        throw new AppError("Cliente not found",400);
    }
    
    const newClient =  clienteRepository.create({
        ...clienteId,
        name,
        email,
        telefone,
        
    });

    await clienteRepository.save(newClient)
    

    return newClient
};



export{createClienteService,clienteLoginService,listClientesService,listClienteService,updateClienteService}