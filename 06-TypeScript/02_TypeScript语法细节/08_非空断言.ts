interface IPerson {
    name: string
    age: number
    friends?: string []
}

const person: IPerson = {
    name: '张三',
    age: 18,
}

console.log(person!.friends)

export {}