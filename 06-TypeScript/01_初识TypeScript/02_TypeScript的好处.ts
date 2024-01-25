/**
 * 获取指定参数的长度
 * @param {*} args 
 * @returns 
 */
function getLength(args: string | any[]) {
  return args.length
}

// 调用函数
let length = getLength('hello world')
console.log('长度', length)

// 调用函数
length = getLength(["abc", "cba", "nba"])
console.log('长度', length)

// 调用函数
length = getLength() // TypeScript 可以帮助我们发现错误
console.log('长度', length)


export { }