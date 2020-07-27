import bcrypt from "bcryptjs"

export default function hashPass(password: string): string {
    const hash: string = bcrypt.hashSync(password, 12)
    return hash
}
