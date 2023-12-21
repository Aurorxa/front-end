import React, {memo, useState} from 'react'


const Footer = memo(function Footer() {
  
  const [message] = useState('我是 Footer 组件')
  
  console.log('Footer render')
  
  return (
    <div style={{backgroundColor: 'sienna', padding: '5px', border: "1px solid black"}}>
      <h2>{message}</h2>
    </div>
  )
})


export default Footer