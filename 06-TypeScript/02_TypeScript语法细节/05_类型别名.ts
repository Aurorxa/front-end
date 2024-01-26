type ObjType = { // 类型别名
  name: string
  age: number
  height?: number
}

const obj: ObjType = {
  name: "abc",
  age: 123
}


console.log(obj.name, obj.age, obj?.height)

export { }