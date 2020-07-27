import express, { Response } from "express"
import { register, findAllUsers, clearCollection } from "./handlers"
export const authRouter = express.Router()

authRouter.post("/register", register)
authRouter.get("/", findAllUsers)
authRouter.delete("/clearcollection", clearCollection)
