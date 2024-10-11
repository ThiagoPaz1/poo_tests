import { WaeponNinja } from "./WeaponNinja"

export class Ninja extends WaeponNinja {
  waepon: string = ""
  private name: string = ""
  private age: string = ""
  private village: string = ""
  
  constructor(name: string, age: string, village: string) {
    super()
    this.name = name
    this.age = age
    this.village = village
  }

  public get infoTheNinja(): string {
    return `Hello, my name is ${this.name}, i have ${this.age} and from at ${this.village} village`
  }
  
  public atack(): string {
    return "Atack with jutsu"
  
  }
  
  getListWaepon(): string[] {
    throw new Error("Method not implemented.")
  }
}