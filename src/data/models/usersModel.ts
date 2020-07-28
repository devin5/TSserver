import mongoose, { Document, Schema, Model, model } from "mongoose"

export interface IUser extends Document {
    email: string
    username: string
    hash?: string
    createdAt?: Date
    updateAt?: Date
}

const userSchema: mongoose.Schema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            index: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            index: true,
        },
        hash: {
            required: true,
            type: String,
        },
    },
    { timestamps: true }
)

const Users: Model<IUser> = model<IUser>("Users", userSchema)

export default Users
