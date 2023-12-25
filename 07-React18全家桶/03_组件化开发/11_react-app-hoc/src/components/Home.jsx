import {useState} from "react";
import {withConfig} from "@/hoc/withConfig";

function Home(props) {
  const [state] = useState("我是 Home 组件");
  return (
    <div style={{backgroundColor: 'skyblue', padding: '5px'}}>
      <h2>{state}</h2>
      <div>
        <h3>名称：{props.name}</h3>
        <h3>年龄：{props.age}</h3>
      </div>
    </div>
  )
}


export default withConfig(Home, {age: 18})