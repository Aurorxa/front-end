class Person {
  private name: string // 私有属性，仅在本类中可见
  protected age: number // 受保护的，仅在本类及其子类中可见
  gender: string // 不写，默认就是 public，在任何地方都可见

  constructor(name: string, age: number, gender: string) {
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