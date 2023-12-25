import {createContext} from "react"
// 主题
export const themes = {
  light: { // 明亮
    background: 'white',
  },
  dark: { // 暗黑
    background: 'gray',
  },
};
// 创建主题 Context
const ThemeContext = createContext(themes.light)
ThemeContext.displayName = "ThemeContext"
// 导出主题 Context
export default ThemeContext