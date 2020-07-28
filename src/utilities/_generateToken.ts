import "dotenv/config"
import jwtToken, { Secret } from "jsonwebtoken"

export default function generateToken(
    user: Record<string, unknown>
): string | void {
    let secret: Secret
    if (process.env.MY_SECRET) {
        secret = process.env.MY_SECRET
        const payload: Record<string, unknown> = {
            User_Email: user.email,
            User_ID: user._id,
        }
        const options = {
            expiresIn: "360d",
        }
        return jwtToken.sign(payload, secret, options)
    } else {
        console.log("no secret in env")
    }
}
