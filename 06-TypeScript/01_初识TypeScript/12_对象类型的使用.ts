const obj: { // 对象类型
  name: string
  age: number
  height?: number
}
  = { name: '许大仙', age: 18 }

console.log(obj.name, obj.age, obj.height) // 许大仙 18 undefined

export { }