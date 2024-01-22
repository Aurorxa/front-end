import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import {Provider} from "react-redux"
import store from '@/store'
import '@/index.css'
import {NextUIProvider} from "@nextui-org/react";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <App/>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
)

