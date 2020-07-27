import 'dotenv/config'
import express, { Application, Response, NextFunction } from 'express'
import models from './data'
import serverConfig from './middleware/configApi'
import { authRouter } from './auth/authRouter'

export const app: Application = express()
serverConfig(app)
// sets the model context for our Routes
app.use(async (req: any, res: Response, next: NextFunction) => {
    req.context = {
        models,
    }
    next()
})

app.use('/api/auth', authRouter)
