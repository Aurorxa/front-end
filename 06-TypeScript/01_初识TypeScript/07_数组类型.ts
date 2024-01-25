// 定义数组方式①
const arr: number[] = [1, 2, 3]
arr.push(...[4, 5, 6])
console.log(arr)

// 定义数组方式②
const arr2: Array<number> = [1, 2, 3]
arr2.push(...[4, 5, 6])
console.log(arr2)

export { }