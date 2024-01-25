function printName(obj: { firstName: string, lastName?: string }) {
  console.log(obj.firstName, obj.lastName)

  // undefined.xxx() 方法会直接报错，可以只用 if 语句判断或 ?

  if (obj.lastName) {
    console.log(obj.lastName?.toUpperCase())
  }

  console.log(obj.lastName?.toUpperCase())
}

printName({ firstName: 'a', lastName: 'bb' })
printName({ firstName: 'a' })  


export {}