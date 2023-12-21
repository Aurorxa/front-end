// 先编写函数的重载签名
function add(arg1: number, args2: number): number
function add(arg1: string, args2: string): string
function add(arg1: string, args2: number): string
function add(arg1: number, args2: string): string

// 编写通用的函数实现
function add(arg1: any, args2: any): any {
  return arg1 + args2
}

console.log(add("abc", "cba"))
console.log(add(1, 2))
console.log(add("1", 2))
console.log(add(1, "2"))

export { }