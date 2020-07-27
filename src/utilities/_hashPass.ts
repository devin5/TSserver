import bcrypt from "bcryptjs"



export default function hashPass(password: string){
    const hash = bcrypt.hashSync(password, 12);
    return hash
}