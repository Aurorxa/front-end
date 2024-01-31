class Person {
  #name = ""

  constructor(name) {
    this.#name = name;
  }

  set name(name) {
    this.#name = name
  }

  get name() {
    return this.#name;
  }
}

const person = new Person('John')
console.log(person.name);
person.name = "Tom"
console.log(person.name, person.#name); // 报错

