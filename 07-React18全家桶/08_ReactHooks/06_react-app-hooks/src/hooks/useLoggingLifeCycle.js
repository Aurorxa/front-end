import {useEffect} from "react"

export function useLoggingLifeCycle(componentName) {
  useEffect(() => {
    console.log(`${componentName}组件被创建了`)
    return () => {
      console.log(`${componentName}组件被销毁了`)
    }
  }, [componentName])
}

