import { Router } from "express";
import { createClienteController } from "../controllers/cliente.controller";


const clienteRoutes = Router()

clienteRoutes.post("", createClienteController)

export{clienteRoutes}