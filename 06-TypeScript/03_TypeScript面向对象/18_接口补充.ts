interface ISwim {
  swim(): void
}

interface IRun {
  run(): void
}

// 类实现接口
class Person implements ISwim, IRun {
  swim(): void {
    console.log('游泳...')
  }
  run(): void {
    console.log('跑步...')
  }
}

const p: Person = new Person()
p.swim()
p.run()


export { }