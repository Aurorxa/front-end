class Person {
  constructor(private _name: string, public age: number) {}

  set name(name) {
    this._name = name
  }

  get name() {
    return this._name;
  }
}

const person = new Person("John", 18);
console.log(person.name, person.age); 

export { }