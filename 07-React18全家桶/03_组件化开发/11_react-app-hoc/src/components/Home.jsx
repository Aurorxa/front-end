import {useState} from "react"
import {withTheme} from "@/hoc/withTheme"

function Home(props) {
  const [state] = useState("我是 Home 组件");
  return (
    <div style={{backgroundColor: props.background, padding: '5px'}}>
      <h2>{state}</h2>
    </div>
  
  )
}
export default withTheme(Home)