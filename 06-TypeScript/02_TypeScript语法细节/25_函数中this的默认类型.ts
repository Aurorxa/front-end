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

// 普通函数
function foo(this: { name: string }, info: { name: string }) {
  console.log(this, info)
}

foo.call({name: "abc"}, {name: "bcd"})

export {}