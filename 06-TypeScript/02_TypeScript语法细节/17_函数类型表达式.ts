type CalcFnType = (num1: number, num2: number) => number


function calc(calcFn: CalcFnType) {
    const num1 = 10
    const num2 = 20
    const result = calcFn(num1, num2)
    console.log(result)
}

function add(num1: number, num2: number): number {
    return num1 + num2
}

calc(add)

// TS 对于传入的函数类型的多余的参数会被忽略掉
function sub(num1: number, num2: number): number {
    return num1 - num2
}

calc(sub)


calc(function (num1, num2) {
    return num1 * num2
})


export {}