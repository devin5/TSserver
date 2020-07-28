import express from "express"
import { register, findAllUsers, clearCollection } from "./handlers"
import {
    validateRegsiterRequestBody,
    validateEmail,
    validateUsername,
} from "./validators"
export const authRouter = express.Router()

authRouter.post(
    "/register",
    validateRegsiterRequestBody,
    validateEmail,
    validateUsername,
    register
)
authRouter.get("/", findAllUsers)
authRouter.delete("/clearcollection", clearCollection)
