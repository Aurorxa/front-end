class Person {  
  constructor() { }
}

function factory(ctor: new() => Person) {
  return new ctor();
}

const p = factory(Person)

export {}