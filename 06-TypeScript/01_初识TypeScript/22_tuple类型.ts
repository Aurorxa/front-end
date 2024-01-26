const person: [string, number, () => void] = ["许大仙", 18, () => { console.log("吃饭") }];

const [name, age, eat] = person

console.log(name, age)

eat()

export { }