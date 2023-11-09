// 在没有对 TS 进行特殊配置的情况下，this 是 any 类型

// 对象中的函数的this
const obj = {
  name: "许大仙",
  age: 18,
  eating: function () {
    console.log(this.name, this.age)
  }
}

obj.eating()
obj.eating()

// 普通函数
// function foo() {
//   console.log(this, 'foo')
// }
//
// foo()

export {}