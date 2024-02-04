interface IPerson {
  name: string
  age: number
}

const info: IPerson = { // 每个对象字面量最初都是新鲜的(fresh)，就会进行严格的类型检测
  name: '张三',
  age: 18,
  height: 1.8
}

export { }