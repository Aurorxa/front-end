interface Person {
  name: string
}

interface IRun {
  running: () => void
}


type NewType = Person & IRun

const obj: NewType = {
  name: "许大仙",
  running: () => {
    console.log("跑步....")
  }
}

console.log(obj.name)
obj.running()


export {}