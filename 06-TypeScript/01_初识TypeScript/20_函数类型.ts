function defSlice(arr: any[], start: number, deleteCount?: number): any[] {
    arr.splice(start, deleteCount)
    return arr;
}

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const result = defSlice(arr, 0, 1)

console.log(result)

export {}