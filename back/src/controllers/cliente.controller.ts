import { Request, Response } from "express"


const createClienteController = async (req: Request, res: Response) => { 


    return res.status(201).json("cliente cadastrado")
}

export{createClienteController}