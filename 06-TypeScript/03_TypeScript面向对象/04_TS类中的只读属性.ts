class Person {
  readonly name: string = "abc"

  constructor(name: string) {
    this.name = name
  }
}

const person = new Person("bcd")

// person.name = "mba" // 报错，因为 name 是只读属性，无法赋值

console.log(person.name)

export { }