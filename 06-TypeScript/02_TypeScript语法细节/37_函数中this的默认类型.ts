// ① 对象中的函数的 this
const obj = {
  name: '许大仙',
  age: 18,
  studing: function (this: {}) {
    // 默认情况下，是 any 类型；但是，开启 "noImplicitThis": true 之后，TS 会推断为 obj 对象
    console.log(this + '正在学习...')
  }
}

// obj.studing()
obj.studing.call({}) // 这里的 this 就不应该是 any 类型，而应该是 {}，存在安全隐患！！！

// ② 普通的函数
function foo(this: typeof globalThis, name: string) { // 第一个参数必须是 this ，并且用来声明 this 的类型
  console.log(this, name)
}

foo.call(globalThis, "许大仙")

export { }