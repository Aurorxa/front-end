function fail(msg: string): never {
  throw new Error(msg)
}

try {
  fail("abc")
} catch (error: any) { // 注意：默认情况下，catch 语句中的 error 的类型是 unknown 而不是 any ，并且只能是 unknow 或 any 类型
  console.log(error.message)
}


try {
  fail("abc");
} catch (error: unknown) { // 注意：默认情况下，catch 语句中的 error 的类型是 unknown 而不是 any ，并且只能是 unknow 或 any 类型
  console.log((error as Error).message);
}

export { }