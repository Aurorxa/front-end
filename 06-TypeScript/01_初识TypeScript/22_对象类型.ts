const person: {
    name: string
    age: number
    say(): void
} = {
    name: '许大仙',
    age: 18,
    say() {
        console.log('说话')
    }
};

console.log(person)
person.say()

export {}