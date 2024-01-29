interface Point {
  x: number;
  y: number;
}

type PointConstructor = {
  new (x: number, y: number): Point // 构造签名
}

class Point2D implements Point {
  constructor(public x: number, public y: number) {}
}

function createPoint(ctor: PointConstructor, x: number, y: number): Point { // 工厂函数
  return new ctor(x, y);
}

let point: Point = createPoint(Point2D, 3, 4);
console.log(point); 


export { }