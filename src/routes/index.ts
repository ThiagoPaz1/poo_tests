import { Router } from "express"
import { ninjaController } from "../factory"

const router = Router()

router.get("/ninja", ninjaController.atack)

export { router }