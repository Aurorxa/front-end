interface Point {
    x: number
    y: number
}

interface Point {
    z?: number
}

function printPoint(point: Point): void {
    console.log(point.x)
    console.log(point.y)
}


interface Animal {
    name: string
}

interface Bear extends Animal {
    honey: boolean
}


export {}