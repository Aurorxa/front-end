// 在将 "noImplicitThis": true 打开之后，就不允许出现模糊的 this 了  

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
function foo() {
  console.log(this, 'foo')
}

foo()

export { }