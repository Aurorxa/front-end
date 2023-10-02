import '../css/div_style.css'
import '../css/h2_style.less'

const divEle = document.createElement('div')

divEle.textContent = 'hello world'
divEle.classList.add("content")

document.body.appendChild(divEle)

const h2Ele = document.createElement('h2')
h2Ele.textContent = 'h2'
h2Ele.classList.add('h2')

document.body.appendChild(h2Ele)
