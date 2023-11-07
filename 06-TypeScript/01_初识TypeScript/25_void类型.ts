function delayExeFn(fn: ((...args: any[]) => void), delay: number): void {
    setTimeout(() => {
        fn(1, 2)
    }, delay)
}


delayExeFn((a, b) => {
    console.log(a, b)
}, 1000)

export {}