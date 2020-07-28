import { Response, Request } from "express"
import _hash from "../utilities/_hashPass"
import generateToken from "../utilities/_generateToken"
import models from "../data/index"

export const register = async (req: Request, res: Response): Promise<void> => {
    const username: string = req.body.username
    const password: string = req.body.password
    const email: string = req.body.email
    const hash = _hash(password)
    try {
        const addUserResponse = await models.Users.create({
            username: username,
            email,
            hash,
        })
        const token = generateToken({
            _id: addUserResponse._id,
            username: addUserResponse.username,
        })

        const message = {
            _id: addUserResponse._id,
            createdAt: addUserResponse.createdAt,
            updateAt: addUserResponse.updateAt,
            email,
            username,
        }
        res.status(200).json({ data: message, token: token })
    } catch (err) {
        res.status(500).json({
            status: "failed to create new user",
            message: err,
        })
    }
}

export const findAllUsers = async function (
    req: Request,
    res: Response
): Promise<void> {
    try {
        const users = await models.Users.find()

        res.status(200).json({ data: users })
    } catch (err) {
        res.status(500).json({
            status: "failed to get users",
            message: err,
        })
    }
}

export const clearCollection = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        await models.Users.deleteMany({})
        res.status(200).json({ message: "collection cleared" })
    } catch (err) {
        res.status(500).json({
            status: "failed to delete all users",
            message: err,
        })
    }
}
