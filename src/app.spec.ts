import request from "supertest"
import { App } from "./app"

describe('test app', () => {
  const app = new App().app
  it("should test serve running", async () => {
    const response = await request(app).get('/')
    expect(response.body).toStrictEqual({ ok: true })
  })
})