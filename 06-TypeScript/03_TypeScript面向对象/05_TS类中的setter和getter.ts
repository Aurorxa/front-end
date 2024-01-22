class Person {
  private _name: string // 私有属性

  constructor(name: string) {
    this._name = name
  }

  eating() {
    console.log(`${this.name}在吃饭~`)
  }

  // setter 和 getter 
  get name() {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

}

const person = new Person("john")

person.eating()

person.name = "tom"

console.log(person.name)


export { }