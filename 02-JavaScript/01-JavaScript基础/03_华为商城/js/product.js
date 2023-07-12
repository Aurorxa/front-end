// ① 动态展示商品列表数据
let productEl = document.querySelector(".product-list")
// ② 搜索条件
let queryConditionList = document.querySelectorAll(".discount .item:not(.discount .item:first-child)");
let queryFilterList = []
queryConditionList.forEach(item => {
    item.onclick = function () {
        // 设置状态
        this.classList.toggle("active")
        // 保存查询条件的关键字
        if (this.classList.contains("active")) {
            queryFilterList.push(this.textContent.trim())
        } else {
            let index = queryFilterList.findIndex(item => this.textContent.trim() === item);
            queryFilterList.splice(index, 1)
        }
        // 对 resultList 进行过滤
        let filterResultList = resultList.filter(item => {
            const {services} = item;
            return queryFilterList.every(keyword => services.includes(keyword))
        })

        render(filterResultList)
    }
})

/**
 * 渲染数据
 * @param resultList
 */
function render(resultList) {
    // 先清空数据
    productEl.innerHTML = ""
    // 再渲染数据
    for (let item of resultList) {
        // 获取页面所需要的数据
        const {shopH5Url, briefName, promotionInfo, price, goodRate, promoLabels, rateCount} = item
        // 创建 item 元素
        let itemEl = document.createElement("li")
        itemEl.classList.add("item")
        // 创建 a 元素
        let aEl = document.createElement("a")
        aEl.href = shopH5Url
        itemEl.append(aEl)
        // 创建 img 元素
        let imgEl = document.createElement("img");
        imgEl.classList.add("album")
        imgEl.src = "./img/product_01.webp"
        aEl.append(imgEl)
        // 创建 div.title元素
        let titleEl = document.createElement("div")
        titleEl.classList.add("title")
        titleEl.textContent = briefName
        aEl.append(titleEl)
        // 创建 div.sub-title 元素
        let subTitleEl = document.createElement("div")
        subTitleEl.classList.add("sub-title")
        subTitleEl.textContent = promotionInfo
        aEl.append(subTitleEl)
        // 创建 div.price 元素
        let priceEl = document.createElement("div")
        priceEl.classList.add("price")
        priceEl.textContent = `￥${price}`
        aEl.append(priceEl)
        // 创建 ul.tags 元素
        let tagsEl = document.createElement("ul")
        tagsEl.classList.add("tags")
        for (let promoLabel of promoLabels) {
            let tagEl = document.createElement("li")
            tagEl.classList.add("tag")
            tagEl.textContent = promoLabel
            tagsEl.append(tagEl)
        }
        aEl.append(tagsEl)
        // 创建 div.comment 元素
        let commentEl = document.createElement('div')
        commentEl.classList.add("comment")
        let countEL = document.createElement("div")
        countEL.classList.add("count")
        let countNumEL = document.createElement("span")
        countNumEL.classList.add("num")
        countNumEL.textContent = `${rateCount}人评价`
        countEL.append(countNumEL)
        commentEl.append(countEL)
        let percentEL = document.createElement("div")
        percentEL.classList.add("percent")
        let percentNumEL = document.createElement("span")
        percentNumEL.classList.add("num")
        percentNumEL.textContent = `${goodRate}%好评`
        percentEL.append(percentNumEL)
        commentEl.append(percentEL)
        aEl.append(commentEl)
        // 将 item 添加到页面上
        productEl.append(itemEl)
    }

    // 处理最后一样元素的样式，如果不足 4 个，让其左对齐
    for (let i = 0; i < 3; i++) {
        let itemEl = document.createElement("li")
        itemEl.classList.add("item")
        itemEl.classList.add("empty")
        productEl.append(itemEl)
    }
}

render(resultList)