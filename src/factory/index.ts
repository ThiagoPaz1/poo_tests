import { Ninja } from "../class/Ninja"
import { NinjaType } from "../class/NinjaType"
import { NinjaController } from "../controllers/ninja"

const ninja = new Ninja("Thiago", "26", "Folha")
const ninjaType = new NinjaType("Thiago", "26", "Folha", "jounin", "raiton")
const ninjaController = new NinjaController()

export {
  ninja,
  ninjaType,
  ninjaController
}