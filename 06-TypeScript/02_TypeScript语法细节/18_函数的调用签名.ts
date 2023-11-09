// 函数表达式
type barType = (num: number) => number
const bar: barType = (num1: number): number => {
  return 123 + num1
}

const result = bar(1)
console.log(result)

// 函数的调用签名：从对象的角度来看函数，也是一个对象，也可以有自己的属性和方法；一般称为静态属性和静态方法
interface IFoo {
  name: string
  age: number

  // 函数可以调用，即函数的调用签名
  (num: number): number
}

const foo: IFoo = (num: number): number => {
  return 123 + num
}
foo.name = "许大仙"
foo.age = 18

console.log(foo.name)
console.log(foo.age)

const res = foo(1)
console.log(res)

// 开发中如何选择？
// 如果仅仅是描述函数类型本身（函数可以被调用），就使用函数类型表达式。
// 如果在描述函数作为对象可以被调用，同时也有其他属性的时候，就可以使用函数调用签名。

export { }