import "dotenv/config"
import { connectDb } from "./data"
import { app } from "./app"

connectDb().then(async () => {
    app.listen(process.env.PORT, () =>
        console.log(`Example app listening on port ${process.env.PORT}!`)
    )
})
