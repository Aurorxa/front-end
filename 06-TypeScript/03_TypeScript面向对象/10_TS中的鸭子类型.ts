class Person {
  constructor(public name: string, public age: number) { }
}

class Dog {
  constructor(public name: string, public age: number) { }
}


function printPerson(person: Person) {

}

printPerson(new Person('张三', 18))
printPerson(new Dog('小灰灰', 19))
printPerson({ name: '李四', age: 20 })
printPerson({ name: '你是狗？', age: 21 })

const p: Person = new Person("李四", 18)
const p2: Person = new Dog("小灰灰2", 18)
const p3: Person = { name: '小灰灰3', age: 19 }

export { }