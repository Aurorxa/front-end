class Greeter {
  readonly name: string = "world";
 
  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }
 
  err() {
    this.name = "not ok" // 报错
  }
}
const g = new Greeter();
g.name = "also not ok" // 报错

export {}