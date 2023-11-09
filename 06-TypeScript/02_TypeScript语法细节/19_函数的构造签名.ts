
class Person {

}

interface IPersonConstructor {
  new(): Person
}


function Factory(fn: IPersonConstructor) {
  return new fn()
}

Factory(Person)


export { }