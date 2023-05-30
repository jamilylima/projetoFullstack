import { Router } from "express";
import { createUserController } from "../controllers/user.controller";
import { dataIsValidMiddleware } from "../middlewares/dataIsValid.middleware";
import { userSchema } from "../schemas/user.schema";

const userRoutes = Router()

userRoutes.post("", dataIsValidMiddleware(userSchema), createUserController)

export{userRoutes}