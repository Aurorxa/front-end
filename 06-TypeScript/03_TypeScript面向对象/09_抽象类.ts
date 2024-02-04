/**
 * 定义一个抽象类：图形
 */
abstract class Graphic {

  /**
   * 计算面积
   */
  abstract getArea(): number
}

/**
 * 定义一个类：圆形，继承了抽象类 Graphic 
 */
class Circle extends Graphic {

  constructor(private radius: number) {
    super()
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2)
  }

}

/**
 * 定义一个类：矩形，继承了抽象类 Graphic 
 */
class Rectangle extends Graphic {

  constructor(private width: number, private height: number) {
    super()
  }

  getArea(): number {
    return this.width * this.height;
  }
}

/**
 * 获取面积
 * @param graphic 
 * @returns 
 */
function calcArea(graphic: Graphic) {

  return graphic.getArea();
}


console.log(calcArea(new Circle(10)))
console.log(calcArea(new Rectangle(10, 20)))


export { }