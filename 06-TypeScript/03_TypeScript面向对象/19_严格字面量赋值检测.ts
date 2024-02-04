interface IPerson {
  name: string
  age: number
}

const obj = {
  name: '张三',
  age: 18,
  height: 1.8
}

const info: IPerson = obj

const info2: IPerson  = {
  name: '张三',
  age: 18,
  height: 1.8
}

export { }