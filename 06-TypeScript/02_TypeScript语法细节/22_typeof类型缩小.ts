type IDType = string | number

function printID(id: IDType) {
  if (typeof id === 'string') {
    console.log(id.length, id.toUpperCase())
  } else {
    console.log(id, id.toFixed(2))
  }
}

printID(123)
printID('123')

export { }