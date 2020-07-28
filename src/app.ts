import "dotenv/config"
import express from "express"
import serverConfig from "./middleware/configApi"
import { authRouter } from "./auth/routes"

export const app: express.Application = express()

serverConfig(app)
// sets the model context for our Routes
// declare const global: Global

// app.use(
//     async (
//         req: IdentificableRequest,
//         res: Response,
//         next: NextFunction
//     ): Promise<void> => {
//         req.context = {
//             models,
//         }
//         return next()
//     }
// )

app.use("/api/auth", authRouter)
