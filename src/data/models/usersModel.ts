import mongoose from 'mongoose'

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

userSchema.statics.findByLogin = async function (loginString: string) {
    let user = await this.findOne({
        username: loginString,
    })

    if (!user) {
        user = await this.findOne({ email: loginString })
    }

    return user
}

userSchema.statics.findAll = async function () {
    const users = await this.find()

    return users
}

userSchema.statics.addUser = async function (userObj: Record<string, unknown>) {
    const answer = await this.create(userObj)

    return answer
}

userSchema.statics.deleteAllData = async function () {
    try {
        await this.deleteMany()
        console.log('All Data successfully deleted')
    } catch (err) {
        console.log(err)
    }
}

const Users = mongoose.model('Users', userSchema)

export default Users
