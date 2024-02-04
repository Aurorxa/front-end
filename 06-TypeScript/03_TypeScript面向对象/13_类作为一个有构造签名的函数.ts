class Person {
  constructor(public name: string, public age: number) { }
}


function factory(ctor: new (name: string, age: number) => Person) {
  return new ctor("张三", 18);
}

const p = factory(Person)


export { }