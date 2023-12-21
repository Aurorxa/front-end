// 联合类型实现
function getLength(args: string | any[]): number {
  return args.length
}

getLength("hello")
getLength(["abc", "cba", "nba"])

// 函数的重载实现
function getLength2(args: string): number
function getLength2(args: string[]): number

function getLength2(args: any): any {
  return args.length
}

getLength2("world")
getLength2(["abc", "cba", "nba"])


// 尽可能使用联合类型的参数而不是重载

export {}