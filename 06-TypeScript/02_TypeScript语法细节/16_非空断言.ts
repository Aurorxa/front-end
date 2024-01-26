interface IPerson {
  name: string,
  age: number,
  friend?: {
    name: string
  }
}

const person: IPerson = {
  name: "张三",
  age: 18
}

// 访问属性的时候，我们可以使用可选链 ?.

console.log(person?.friend?.name)

// 解决方案二：通过非空断言
person!.friend!.name = "李四" // 通过非空断言来设置属性，不会报错

export { }