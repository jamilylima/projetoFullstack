import { Router } from "express";
import { clienteListController, createClienteController, listClienteController, updateClienteController} from "../controllers/cliente.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { clienteSchemaRequest, } from "../schemas/cliente.schema";
import { dataIsValidMiddleware } from "../middlewares/dataIsValid.middleware";



const clienteRoutes = Router()

clienteRoutes.post("", authMiddleware, dataIsValidMiddleware(clienteSchemaRequest), createClienteController)
clienteRoutes.get("", authMiddleware, listClienteController)
clienteRoutes.get("/:id", authMiddleware, clienteListController)
clienteRoutes.patch("/:id", authMiddleware, updateClienteController)




export{clienteRoutes}