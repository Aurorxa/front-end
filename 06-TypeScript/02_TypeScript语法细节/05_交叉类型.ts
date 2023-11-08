interface Person {
    name: string
}

interface Male {
    sex: string
}

const stu: Person & Male = {
    name: '张三',
    sex: '男'
}

console.log(stu.name, stu.sex)

export {}