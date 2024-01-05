import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import store from "@/store"
import {StoreContext} from "@/hoc"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StoreContext.Provider value={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </StoreContext.Provider>
)

