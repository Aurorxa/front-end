/**
 * 
 * @param padding 如果 padding 是 number 类型，则将 padding 作为 input 要预留的空格数；
 *                如果 padding 是 string 类型，则将 padding 前面加上 input 
 * @param input 
 */
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') { // 使用 typeof 类型缩小，将类型由 number | string 变为 number
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

export {}