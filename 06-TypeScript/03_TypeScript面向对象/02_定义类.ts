class Person {

  name: string = "" // 给类的成员变量标注类型注解，同时还可以赋予初始化值
  age: number = 0 // 给类的成员变量标注类型注解，同时还可以赋予初始化值

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(this.name + " is eating");
  }

}

const person = new Person('John', 20);
console.log(person.name, person.age);
person.eating()

export { }