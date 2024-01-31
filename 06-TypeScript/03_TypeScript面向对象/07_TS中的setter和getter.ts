class Person {
  #name: string = ""

  constructor(name: string) {
    this.#name = name;
  }

  set name(name) {
    this.#name = name
  }

  get name() {
    return this.#name;
  }
}

const person = new Person("John");
console.log(person.name);
person.name = "Tom"
console.log(person.name, person.#name) //

export { }