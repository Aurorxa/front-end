class Person {
  // TS 中必须声明成员变量
  name: string = ""
  age: number = 0

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

// 实例对象
const p1 = new Person("张三", 18)

console.log(p1.name, p1.age)


export { }