/**
 * 获取指定参数的长度
 * @param {*} str 
 * @returns 
 */
function getLength(args) {
  return args.length
}

// 调用函数
let length = getLength('hello world')
console.log('长度', length)

// 调用函数
length = getLength(["abc", "cba", "nba"])
console.log('长度', length)

// 调用函数
length = getLength() // 默认情况下，IDE 并不能帮助我们发现错误
console.log('长度', length)