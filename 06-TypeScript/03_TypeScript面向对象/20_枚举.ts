enum Color { // 定义枚举
  Red,
  Green,
  Blue
}

function getColor(color: Color): string { // 参数是枚举类型
  switch (color) {
    case Color.Red: // 判断枚举
      return '红色'
    case Color.Green:
      return '绿色'
    case Color.Blue:
      return '蓝色'
  }
}

const color = getColor(Color.Green)

console.log(color)

export { }