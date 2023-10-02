import '../css/div_style.css'

const divEle = document.createElement('div')

divEle.textContent = 'hello world'
divEle.classList.add("content")

document.body.appendChild(divEle)
