interface SomeType {
  readonly prop: string 
}
 
function doSomething(obj: SomeType) {
  console.log(`prop has the value '${obj.prop}'.`) 
  obj.prop = "hello"  // 报错
}

export {}