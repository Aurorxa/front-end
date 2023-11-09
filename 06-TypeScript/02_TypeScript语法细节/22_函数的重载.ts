// 先编写函数的重载签名
function add(arg1: number, args2: number): number
function add(arg1: string, args2: string): string
function add(arg1: string, args2: number): string

// 编写通用的函数实现
function add(arg1: any, args2: any): any {
    return arg1 + args2
}

add("abc", "cba")
add(1, 2)
add("1", 2)

export {}