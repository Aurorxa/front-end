function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) { // 报错，因为 typeof null 也是 'object'
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}


export { }