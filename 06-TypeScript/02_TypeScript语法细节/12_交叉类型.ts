type Animal = {
  name: string
}

type Bear = Animal & { // 交叉类型，用于对 type 类型进行扩展类型
  honey: boolean
}

const bear: Bear = {
  name: "许大仙",
  honey: true
}

console.log(bear.name, bear.honey)


export {}