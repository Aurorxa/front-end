import {memo, useState} from "react"
import ThemeButton from "@/components/ThemeButton"
import {ThemeContext, themes} from "@/context";

function App() {
  const [theme, setTheme] = useState(themes.light)
  const changeTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }
  
  return (
    <div>
      <button onClick={changeTheme}>切换主题颜色</button>
      <div style={{marginTop: '20px'}}>
        <ThemeContext.Provider value={theme}>
          <ThemeButton/>
        </ThemeContext.Provider>
      </div>
    </div>
  )
}

export default memo(App)

