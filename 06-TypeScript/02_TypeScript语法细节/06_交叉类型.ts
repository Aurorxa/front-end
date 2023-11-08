type Animal = {
    name: string;
}

type Bear = Animal & {
    honey: boolean;
}

const bear: Bear = {
    name: '张三',
    honey: true
}

console.log(bear.name, bear.honey)

export {}