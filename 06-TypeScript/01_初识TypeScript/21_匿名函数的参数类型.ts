const names: string[] = ['a', 'b', 'c', 'd', 'e']

names.forEach(item => { // 无需手动设置类型注解
    console.log(item.toUpperCase())
})

export {}