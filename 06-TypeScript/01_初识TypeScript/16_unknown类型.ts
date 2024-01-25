// `unknown` 类型可以被赋值为任何具体类型的值，但是不能被用于任何操作，除非我们明确地对其进行类型检查或类型断言。
let foo: unknown = "bar"

foo = 1

foo = true

// console.log(foo.length)

// 除非我们明确地对其进行类型检查或类型断言。
if (typeof foo === "string") { // 类型缩小
  console.log(foo.length)
} else if (typeof foo === "number") {
  console.log(foo.toFixed(2))
} else if (typeof foo === "boolean") {
  console.log(foo)
}


export { }