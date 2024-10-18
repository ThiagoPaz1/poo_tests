import express, { Application } from "express"
import { router } from "./routes"

class App {
  public app: Application

  constructor() {
    this.app = express()
    this.config()
    this.routes()
  }

  config() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  routes() {
    this.app.use("/", router)
    this.app.get("/", (req, res) => {
      res.json({ ok: true})
    })
  }

  listen(port: number) {
    this.app.listen(port, () => console.log("Serve is running"))
  }
}

export { App }