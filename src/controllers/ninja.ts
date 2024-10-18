import { Request, Response } from "express"

export class NinjaController {
  public atack(req: Request, res: Response) {
    res.send("Atack with jutsu")
  }
}