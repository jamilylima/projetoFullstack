import { Router } from 'express'
import { loginUserController } from "../controllers/user.controller";


const loginRoutes = Router()

loginRoutes.post("",loginUserController)


export { loginRoutes}