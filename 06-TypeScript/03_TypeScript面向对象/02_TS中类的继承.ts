class Person { // 父类
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

class Student extends Person { // 子类
  major: string
  constructor(name: string, age: number, major: string) {
    super(name, age)
    this.major = major
  }

}

// 实例化对象
const student = new Student('John', 30, 'Math')

console.log(student.name, student.age, student.major)

export { }