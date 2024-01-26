/**
 * 延迟执行某个回调函数
 * @param fn 回调函数
 */
function delayExecFn(fn: () => void) {
  setTimeout(() => {
    if (fn) {
      fn()
    }
  }, 1000)
}


delayExecFn(() => {
  console.log('hello')
})


export { }