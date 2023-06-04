import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { dataIsValidMiddleware } from "../middlewares/dataIsValid.middleware";
import {createContatosController, deleteContatoController, listContatosIdController, updateContatoController} from "../controllers/contato.controller";
import { contatoSchemaRequest, contatoSchemaUpdate } from "../schemas/contato.schema";








const contatosRoutes = Router()

contatosRoutes.use(authMiddleware)

contatosRoutes.post("/:id", dataIsValidMiddleware(contatoSchemaRequest), createContatosController)
contatosRoutes.get("", listContatosIdController)
contatosRoutes.patch("/:id",dataIsValidMiddleware(contatoSchemaUpdate),updateContatoController)
contatosRoutes.delete("/:id",deleteContatoController)


export { contatosRoutes };