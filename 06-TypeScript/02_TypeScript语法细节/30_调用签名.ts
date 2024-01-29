// 调用签名
type IBar = { // 对象类型
  description: string // 属性描述
  age?: number // 属性描述
  eat: (food: string) => void // 属性描述
  (num1: number, num2: number): number // 自身功能描述，即函数本身的功能，用来封装功能~
}

const bar: IBar = (num1, num2) => {
  return num1 + num2
}

// 设置属性
bar.description = "许大仙"
bar.age = 18
bar.eat = (food: string) => {
  console.log(`吃${food}`)
}

// 获取属性
console.log(bar.description)
console.log(bar?.age)
bar.eat("苹果")

// 调用函数(函数本身的功能不就是封装功能吗)
const result = bar(1, 2)
console.log(result)

export { }