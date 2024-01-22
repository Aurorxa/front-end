/**
 *
 * @param name 姓名，必选参数
 * @param age 年龄，可选参数，是 number | undefined
 */
function foo(name: string, age?: number) {
    if (age) { // 需要使用类型缩小
      age += 10
    }
    console.log(name, age)
}

foo("张三")

export {}