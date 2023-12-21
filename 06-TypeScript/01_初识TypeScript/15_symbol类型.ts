// @ts-ignore
const s1: symbol = Symbol("title")
// @ts-ignore
const s2: symbol = Symbol("title")

const obj: { [x: symbol]: string } = {
    [s1]: "许大仙",
    [s2]: "呵呵哒",
}

console.log(obj[s1])

export {}