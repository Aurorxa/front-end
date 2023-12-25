import {useState} from "react";

function About() {
  const [state] = useState("我是 About 组件");
  return (
    <div style={{backgroundColor: 'slateblue', padding: '5px'}}>
      <h2>{state}</h2>
    </div>
  )
}

export default About