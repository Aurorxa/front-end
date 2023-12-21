import '../css/div_style.css'
import '../css/h2_style.less'
import zznhImg from '../assets/zznh.png'

const divEle = document.createElement('div')

divEle.textContent = 'hello world'
divEle.classList.add("content")

document.body.appendChild(divEle)

const h2Ele = document.createElement('h2')
h2Ele.textContent = 'h2'
h2Ele.classList.add('h2')

document.body.appendChild(h2Ele)

// 创建 img 元素
const imgEle = document.createElement('img')
imgEle.src = zznhImg
imgEle.alt = 'logo'

document.body.appendChild(imgEle)

// 创建 div 元素，设置背景图片
const divEle2 = document.createElement('div')
divEle2.classList.add("img-bg")

document.body.appendChild(divEle2)

