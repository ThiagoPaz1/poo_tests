import { Ninja } from "./Ninja"

export class NinjaType extends Ninja {
  level: string = ""
  primaryElementJutsu: string = ""

  constructor(
    name: string,
    age: string,
    village: string,
    level: string, 
    primaryElementJutsu: string
  ) {
    super(name, age, village)
    this.level = level
    this.primaryElementJutsu = primaryElementJutsu
  }

  public get infoTheNinjaType(): string {
    return `I have ${this.level} level, and my element jutsu main is ${this.primaryElementJutsu}`
  }
}