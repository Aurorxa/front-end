function bar(n?: number) { // 可选参数
  console.log(n && n.toFixed()) 
  console.log(n && n.toFixed(2)) 
}

bar(2)

export {}