interface PaintOptions {
  xPos: number
  yPos?: number // 可选属性
}

function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos 
  let yPos = opts.yPos || 0
  console.log(xPos, yPos) 
}

paintShape({ xPos: 100 }) 
paintShape({ xPos: 100, yPos: 100 })

export { }