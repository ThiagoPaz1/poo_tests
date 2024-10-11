export class Ninja {
  private name: string = ""
  private age: string = ""
  private village: string = ""
  
  constructor(name: string, age: string, village: string) {
    this.name = name
    this.age = age
    this.village = village
  }

  public get infoTheNinja(): string {
    return `Hello, my name is ${this.name}, i have ${this.age} and from at ${this.village} village`
  }
}