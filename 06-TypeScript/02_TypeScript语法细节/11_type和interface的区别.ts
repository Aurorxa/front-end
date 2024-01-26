interface Animal  {
  name: string
}

interface Bear extends Animal{
  honey: boolean
}

const bear: Bear = {
  name: "许大仙",
  honey: true
}

console.log(bear.name, bear.honey)




export {}