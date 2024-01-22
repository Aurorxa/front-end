import {memo} from "react"
import Banner from "@/components/Banner"
import Counter from "@/components/Counter"

function App() {
  
  console.log('App 渲染了')
  
  return (
    <div>
      <div style={{background: "pink", padding: '10px', width: '500px'}}>
        <Counter/>
      </div>
      <div style={{background: "skyblue", padding: '10px', width: '500px'}}>
        <Banner/>
      </div>
    </div>
  )
}

export default memo(App)