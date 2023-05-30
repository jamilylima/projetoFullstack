import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { dataIsValidMiddleware } from "../middlewares/dataIsValid.middleware";
import {createContatosController, deleteContatoController, listContatosIdController, updateContatoController} from "../controllers/contato.controller";
import { contatoSchemaRequest } from "../schemas/contato.schema";




const contatosRoutes = Router()

contatosRoutes.post("", authMiddleware, dataIsValidMiddleware(contatoSchemaRequest), createContatosController)
contatosRoutes.get("", authMiddleware, listContatosIdController)
contatosRoutes.patch("/:id", authMiddleware, updateContatoController)
contatosRoutes.delete("/:id",authMiddleware,deleteContatoController)


export { contatosRoutes };