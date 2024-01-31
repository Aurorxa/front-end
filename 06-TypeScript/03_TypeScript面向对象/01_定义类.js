class Person {

  name = "" // 成员变量，公有字段
  #age // 成员变量，私有字段，只能在类的内部访问，即：读取和赋值

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  setAge(age) {
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

}

const person = new Person('John', 20);
console.log(person.name, person.getAge());