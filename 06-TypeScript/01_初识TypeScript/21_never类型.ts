function fn(x: string | number) { // 联合类型
  if (typeof x === "string") {
    return x.length;
  }else if (typeof x === "number") {
    return x.toFixed(2);
  } else {
    // 当 TS 确定联合类型中没有任何剩余的内容的时候，如：已经处理了 string 和 number 类型的情况，那么 x 就是 never 类型
    return x
  }
  
}

export { }