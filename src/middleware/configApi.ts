import express, { Application } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from "morgan"

export default function serverConfig(app: Application) {
    app.use(express.json());
    app.use(helmet());
    app.use(cors());
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
}