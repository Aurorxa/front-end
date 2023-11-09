// 函数的参数可以有默认值
// ① 参数有默认的情况下，参数的类型注解可以省略。
// ② 有默认值的参数，可以接收 undefined 的。
function foo(name: string, age: number = 10) {
    console.log(name, age)
}

foo("张三")
foo("张三", 20)
foo("张三", undefined)

export {}