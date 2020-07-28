import express, { Request, Response } from "express"
import serverConfig from "./middleware/configApi"
import { authRouter } from "./auth/routes"

export const app: express.Application = express()

serverConfig(app)

app.use("/api/auth", authRouter)

app.use("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "fsafsfsda" })
})
