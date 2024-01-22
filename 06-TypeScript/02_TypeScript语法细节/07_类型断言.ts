// 获取 DOM 元素 <img class="img">
const imgEl = document.querySelector(".img") as HTMLImageElement

if (imgEl !== null) {
    console.log(imgEl.src)
}

export {}