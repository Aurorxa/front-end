function add(a: number, b: number): number // 重载签名 
function add(a: string, b: string): string // 重载签名 

function add(a: any, b: any): any { // 实现签名
  return a + b
}

let result1 = add(1, 2)
console.log(result1)

let result2 = add('1', '2')
console.log(result2)


export { }