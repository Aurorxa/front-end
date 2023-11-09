
// 普通函数
function foo(this: { name: string }, info: { name: string }) {

  console.log(this, info)
}

type fooType = typeof foo

// 获取 footType 类型中 this 的类型
type fooThisType = ThisParameterType<fooType>

// 移除函数类型中的 this 的类型
type argsType = OmitThisParameter<fooType>

// ThisType 用于绑定一个额上下文的 this
interface IState {
  name: string
  age: number
}

interface IStore {
  state: IState
  eating: () => void
  running: () => void
}
const store: IStore & ThisType<IState> = {
  state: {
    name: '张三',
    age: 18
  },
  eating(this: IState) {
    console.log(this.name)
  },
  running() {
    console.log(this.name)
  }
}

store.eating.call(store.state)

console.log()

export { }