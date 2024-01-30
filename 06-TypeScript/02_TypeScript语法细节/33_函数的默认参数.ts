function multiply(a: number, b = 1) { // 默认参数没有必要编写类型注解，因为可以根据默认参数的值自动推断
  return a * b;
}

console.log(multiply(5, 2));
// Expected output: 10

console.log(multiply(5));
// Expected output: 5

export { }