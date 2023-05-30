import { Router } from 'express'
import { loginUserController } from "../controllers/user.controller";
import { dataIsValidMiddleware } from "../middlewares/dataIsValid.middleware";
import { userSchemalogin } from "../schemas/user.schema";

const loginRoutes = Router()

loginRoutes.post("",dataIsValidMiddleware(userSchemalogin),loginUserController)


export { loginRoutes}