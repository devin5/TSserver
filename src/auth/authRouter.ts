import express, { Response } from "express"
import _hash from "../utilities/_hashPass"

export const authRouter = express.Router()

authRouter.get("/", async (req: any, res: Response) => {
    const users = await req.context.models.Users.findAll()

    return res.send(users)
})

authRouter.post("/register", async (req: any, res: Response) => {
    const username: string = req.body.username
    const password: string = req.body.password
    const email: string = req.body.email
    const hash = _hash(password)
    const answer = await req.context.models.Users.addUser({
        username,
        email,
        hash,
    })
    return res.send(answer)
})

authRouter.delete("/users", async (req: any, res: Response) => {
    const answer = await req.context.models.Users.deleteAllData()
    return res.send(answer)
})