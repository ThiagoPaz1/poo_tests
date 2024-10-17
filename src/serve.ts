import { ninja, ninjaType } from "./factory"
import { App } from "./app"

const app = new App()
console.log(ninja.infoTheNinja)
console.log(ninjaType.getListWaepon())
console.log("ninja:", ninja.atack())
console.log("ninjaType:", ninjaType.atack())

app.listen(3000)