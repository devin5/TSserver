import supertest from "supertest"
import { app } from "./app"
const request = supertest(app)

it("should test that true === true", () => {
    expect(true).toBe(true)
})

it("gets the get all users endpoint", async (done) => {
    const response = await request.get("/")
    expect(response.status).toBe(200)
    expect(response.body.message).toBe("fsafsfsda")
    done()
})

it("Any non-existent URL containing a valid parent path returns 200 and hits default route", async (done) => {
    const response = await request.get("/dvvd/s67657%&*^vfv5dsfv")
    expect(response.status).toBe(200)
    expect(response.body.message).toBe("fsafsfsda")
    done()
})
