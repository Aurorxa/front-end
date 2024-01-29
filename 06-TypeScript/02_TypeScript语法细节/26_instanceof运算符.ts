function print(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toLocaleString())
  } else {
    console.log(x.toUpperCase())
  }
}

print(new Date())
print('x')

export { }