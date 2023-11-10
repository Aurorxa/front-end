class Person {
  // 参数属性：TypeScript 提供了特殊的语法，用于将构造函数参数转换为具有相同名称和值的类属性。
  // 这些称为参数属性，是通过在构造函数参数前加上可见性修饰符 public、private、protected 或 readonly 之一来创建的。
  constructor(private name: string, protected age: number, public gender: string) {
    this.name = name
    this.age = age
    this.gender = gender
  }

}

class Student extends Person {
  major: string

  constructor(name: string, age: number, gender: string, major: string) {
    super(name, age, gender)
    this.major = major
  }

}

const student = new Student('John', 30, '男', 'Computer Science')

console.log(student.gender, student.major)


export { }