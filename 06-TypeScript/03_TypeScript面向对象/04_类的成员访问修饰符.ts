class Person {
  name: string
  protected age: number // protected 在类自身及子类中可见、受保护的属性或方法
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(this.name + " is eating");
  }

  running() {
    console.log(this.name + " is running");
  }
}

class Student extends Person {
  score: number = 0

  constructor(name: string, age: number, score: number) {
    super(name, age)
    this.score = score
  }

  study() {
    console.log(this.name + " is studying");
  }
}

const student = new Student('John', 20, 90)
console.log(student.name, student.age, student.score)
student.eating()
student.running()
student.study()

export { }