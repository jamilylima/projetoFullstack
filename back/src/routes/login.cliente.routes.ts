import { Router } from "express";
import { loginClienteController } from "../controllers/cliente.controller";

const loginClienteRoutes = Router()

loginClienteRoutes.post("",loginClienteController)

export{loginClienteRoutes}