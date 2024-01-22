import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import {ThemeContext, themes, TokenContext} from "@/context"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeContext.Provider value={themes.light}>
      <TokenContext.Provider value={{username: "许大仙"}}>
        <App/>
      </TokenContext.Provider>
    </ThemeContext.Provider>
  </React.StrictMode>
)

