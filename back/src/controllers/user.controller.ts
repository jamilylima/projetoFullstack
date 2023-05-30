import { Request, Response } from "express";
import { handleError } from "../../src/errors/AppError"
import { IUserRequest, IUserloginRequest} from "../../src/interfaces/user.interface";
import { createUserService,userLoginService } from "../services/user.service";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email,  password}: IUserRequest = req.body;
    const { password: notPassword, ...user } = await createUserService ({ name,email, password});
    return res.status(201).json(user);
  } catch (error: any) {
    handleError(error, res);
  }
};


export const loginUserController = async (req: Request, res: Response) => {
  try {
    const { email, password }: IUserloginRequest = req.body;
    const login = await userLoginService({ email, password });
    return res.status(200).json(login);
  } catch (error: any) {
    handleError(error, res);
  }
};