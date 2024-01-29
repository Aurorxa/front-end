// 字面量类型配合联合类型可以模拟出枚举的作用
type Direction = 'left' | 'right' | 'up' | 'down'

function move(direction: Direction) {
  switch (direction) {
    case 'left':
      console.log('left')
      break
    case 'right':
      console.log('right')
      break
    case 'up':
      console.log('up')
      break
    case 'down':
      console.log('down')
      break
  }
}


move('left') // 参数只能是 'left' | 'right' | 'up' | 'down' 中的一个


interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");



export { }