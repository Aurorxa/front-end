interface Home {
  readonly resident: { name: string; age: number }
}

function visitForBirthday(home: Home) {
  console.log(`Happy birthday ${home.resident.name}!`)
  home.resident.age++ // 没有报错，因为 resident 所指向的对象是同一个，即堆空间没有变化
}


export { }