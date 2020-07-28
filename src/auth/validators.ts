import { Request, Response, NextFunction } from "express"
import models from "../data/index"
interface user {
    username: string
    email: string
    password: string
}

export const validateRegsiterRequestBody = (
    req: Request,
    res: Response,
    next: NextFunction
): void | NextFunction => {
    const user: user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }
    if (!user.username || !user.email || !user.password) {
        res.status(400).json({
            message: "most include username, password, email",
        })
    } else {
        next()
    }
}

export const validateEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void | NextFunction> => {
    const email: string = req.body.email
    try {
        const User = await models.Users.find({ email: email })
        console.log(User)
        if (User.length) {
            console.log(User)
            res.status(400).json({
                status: "fail",
                message: "email already exists",
            })
        } else {
            next()
        }
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err,
        })
    }
}

export const validateUsername = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void | NextFunction> => {
    const username: string = req.body.username
    try {
        const User = await models.Users.find({ username: username })
        console.log(User)
        if (User.length) {
            console.log(User)
            res.status(400).json({
                status: "fail",
                message: "username already exists",
            })
        } else {
            next()
        }
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err,
        })
    }
}
