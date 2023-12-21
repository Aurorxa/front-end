const obj: { name: string, age: number, height?: number } = {
    name: "张三",
    age: 18
}

console.log(obj.name, obj.age)

obj.name = "李四"

console.log(obj.name, obj.age)

export {}