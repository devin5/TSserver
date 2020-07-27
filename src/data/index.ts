import 'dotenv/config'
import mongoose, { Mongoose } from 'mongoose'
import Users from './models/usersModel'

const connectDb = (): Promise<Mongoose> => {
    return mongoose.connect(process.env.DATABASE_URL!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

const models = { Users }

export { connectDb }

export default models
