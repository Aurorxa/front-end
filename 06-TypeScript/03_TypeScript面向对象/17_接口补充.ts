interface Colorful {
  color: string
}

interface Circle {
  radius: number
}

// 接口的多继承关系
interface ColorfulCircle extends Colorful, Circle { }

const cc: ColorfulCircle = {
  color: 'blue',
  radius: 10
}

export { }