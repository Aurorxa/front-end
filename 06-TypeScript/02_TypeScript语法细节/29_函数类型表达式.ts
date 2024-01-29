type callbackFnType = (num1: number, num2: number) => number

function calc(num1: number, num2: number, callbackFn: callbackFnType) {
  return callbackFn(num1, num2);
}

const num1 = 1
const num2 = 2

let result = calc(num1, num2, (x, y) => x + y)
console.log('加法', result);

result = calc(num1, num2, (x, y) => x - y)
console.log('减法', result);

result = calc(num1, num2, (x, y) => x * y)
console.log('乘法', result);

result = calc(num1, num2, (x, y) => x / y)
console.log('除法', result);

export { }