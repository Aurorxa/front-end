function foo(this: typeof globalThis, name: string, age: number): void {

}

type thisType = ThisParameterType<typeof foo>

type x = OmitThisParameter<typeof foo>

export { }