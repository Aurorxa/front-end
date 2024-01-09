import {memo} from "react"
import Counter from "@/components/Counter"

function App() {
  
  return (
    <div>
      <div>
        <Counter/>
      </div>
    </div>
  )
}

export default memo(App)

