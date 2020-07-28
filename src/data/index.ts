import mongoose, { Mongoose } from "mongoose"

import Users from "./models/usersModel"

let url: string
typeof process.env.DATABASE_URL === "string"
    ? (url = process.env.DATABASE_URL)
    : console.error("no db url in ENV")

const connectDb = (): Promise<Mongoose> => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

const models = { Users }
// practice

export { connectDb }

export default models
