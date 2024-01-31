class Person {
  private _name: string = ""

  constructor(name: string) {
    this._name = name;
  }

  set name(name) {
    this._name = name
  }

  get name() {
    return this._name;
  }
}

const person = new Person("John");
console.log(person.name);
person.name = "Tom"
console.log(person.name, person._name) // 报错，不可以在外部访问私有属性

export { }