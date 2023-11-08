type PointType = {
    x: number
    y: number
}

function printPoint(point: PointType): void {
    console.log(point.x)
    console.log(point.y)
}


printPoint({x: 100, y: 100})


type IDType = number | string

function printID(id: IDType): void {
    if (typeof id === "number") {
        console.log(id)
    } else if (typeof id === "string") {
        console.log(id.toUpperCase())
    }
}

printID(123)
printID("abc")


export {}