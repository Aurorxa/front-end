
async function foo(): Promise<number> {
  const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
  return promise
}

foo().then(res => console.log(res))

export { }