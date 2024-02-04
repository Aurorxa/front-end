interface IPerson {
  [index: string]: string | number // 索引签名
  name: string
}

const p: IPerson = {
  name: '张三',
  age: 18,
  height: 1.8
}

const name = p.name
const age = p.age
const height = p.height

export { }