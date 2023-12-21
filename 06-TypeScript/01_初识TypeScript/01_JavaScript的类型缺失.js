function getLength(args) {
    return args.length
}

console.log(getLength("Hello World"))
console.log(getLength(["a", "b", "c"]))
console.log(getLength(123)) // undefined