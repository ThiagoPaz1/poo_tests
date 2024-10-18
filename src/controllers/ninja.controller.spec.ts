import request from "supertest"
import { App } from "../app"

describe("tests controller ninja", () => {
  const app = new App().app

  it("should reponse sucess ninja endpoint", async () => {
    const reponse = await request(app).get("/ninja")
    expect(reponse.text).toBe("Atack with jutsu")
  })
})