import "reflect-metadata"
import "express-async-errors"
import express from "express"
import cors from "cors"
import { clienteRoutes } from "./routes/cliente.routes"
import { handleAppErrorMiddleware } from "./middlewares/handleAppErrorMiddleware"
import { userRoutes } from "./routes/user.routes"
import { loginRoutes} from "./routes/loginUser.routes"
import { loginClienteRoutes } from "./routes/login.cliente.routes"
import { contatosRoutes } from "./routes/contatos.routes"



const app = express()
app.use(cors());
app.use(express.json())
app.use("/cliente", clienteRoutes)
app.use("/user", userRoutes)
app.use("/loginUser", loginRoutes)
app.use("/loginCliente", loginClienteRoutes)
app.use("/contatos",contatosRoutes)


app.use(handleAppErrorMiddleware)

export default app