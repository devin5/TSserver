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

userSchema.methods.findByEmail = async function (loginString: string) {
    const user = await this.findOne({
        email: loginString,
    })
    return user
}
userSchema.methods.findByUsername = async function (loginString: string) {
    const user = await this.findOne({
        username: loginString,
    })
    return user
}

userSchema.methods.findAll = async function () {
    const users = await this.find()

    return users
}

userSchema.methods.addUser = async function (userObj: Record<string, unknown>) {
    const answer = await this.create(userObj)

    return answer
}

userSchema.methods.deleteAllData = async function () {
    try {
        await this.deleteMany()
        console.log("All Data successfully deleted")
    } catch (err) {
        console.log(err)
    }
}

const Users: Model<IUser> = model<IUser>("Users", userSchema)

export default Users
