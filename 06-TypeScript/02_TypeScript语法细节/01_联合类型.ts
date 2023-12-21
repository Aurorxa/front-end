let a: number | string = "123"
a = 23

console.log(a)

function printId(id: number | string | object) {
    if (typeof id === "number") {
        console.log(id)
    } else if (typeof id === "string") {
        console.log(id.toUpperCase())
    }
    if (typeof id === "object") {
        console.log(id)
    }

    console.log(typeof id)
}

export {}