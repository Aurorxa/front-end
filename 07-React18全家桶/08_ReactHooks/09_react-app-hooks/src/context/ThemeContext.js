import {createContext} from "react";

export const themes = { // 主题
  light: {
    foreground: "red",
    background: "pink"
  },
  dark: {
    foreground: "white",
    background: "skyblue"
  }
};
export const ThemeContext = createContext(themes.light)
