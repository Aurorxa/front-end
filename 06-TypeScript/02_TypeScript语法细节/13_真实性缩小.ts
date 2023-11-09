function printAll(strs: string | string[] | null) {
  if (!strs) {
     return strs
  }else{
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

export {}