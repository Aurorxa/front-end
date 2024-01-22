import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import {RouterProvider} from "react-router-dom"
import 'normalize.css'
import '@/assets/css/index.less'
import router from '@/router'
import {Provider} from "react-redux"
import store from '@/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Suspense fallback={"loading..."}>
      <RouterProvider router={router}>
        <Provider store={store}>
          <App/>
        </Provider>
      </RouterProvider>
    </Suspense>
  </React.StrictMode>
)

