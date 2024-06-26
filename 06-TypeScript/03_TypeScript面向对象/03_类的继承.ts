class Person {
  name: string
  age: number

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