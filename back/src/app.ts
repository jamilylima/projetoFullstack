import "reflect-metadata"
import "express-async-errors"
import express from "express"
import cors from "cors"
import { clienteRoutes } from "./routes/cliente.routes"


const app = express()
app.use(cors());
app.use(express.json())
app.use("/cadastroCliente", clienteRoutes)


app.get("/", (req, res) => res.json("hello worldd"))

export default app