import {memo, useContext} from "react"
import {ThemeContext} from "@/context"

function ThemeButton() {
  const theme = useContext(ThemeContext)
  return (
    <button style={{
      background: theme.background, color: theme.foreground,
      width: '60px', height: '40px'
    }}>按钮</button>
  )
}

export default memo(ThemeButton)