import { AppDataSource } from "../../src/data-source"
import { User } from "../entities/user.entities";
import { AppError } from "../errors/AppError";
import { IUserRequest } from "../interfaces/user.interface";
import { hash } from "bcryptjs";
import { userSchema } from "../schemas/user.schema";
import { IUserloginRequest } from "../interfaces/user.interface"
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config"



const createUserService = async (data: IUserRequest): Promise <IUserRequest> => {
    const { name, email, password} = data
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOne({
        where: {
            email
        }
    })

    if (findUser) {
        throw new AppError("Cliente already exists", 409)
    }

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        name,
        email,
        password: hashedPassword,
    })

    await userRepository.save(user)
    return userSchema.parse(user)

}


const userLoginService = async ({ email, password }: IUserloginRequest):Promise<string> => {
    const userDb = AppDataSource.getRepository(User);
  
    const users = await userDb.find();
  
    const account = users.find((user) => user.email === email);
    console.log(account)
  
    if (!account) {
      throw new AppError( "Email ou senha errado",404);
    }
    const passwordMatch = await compare(password, account.password)

    if (!passwordMatch) {
        throw new AppError("Invalid credentials", 403)
    }
  
    const token = jwt.sign({ email: email }, String(process.env.SECRET_KEY), {
      expiresIn: "1d",
    });
  
    return token;
  };
  

export{createUserService, userLoginService }