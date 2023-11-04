export const findTabKey = (map = new Map(), targetValue = 0) => {
    // 先将 map 中的 value 转换为数组
    const valuesArray = Array.from(map.values())
    // 对 value 数组进行排序
    const newValueArray = valuesArray.sort((a, b) => a - b)
    console.log('@@@ findTabKey newValueArray @@@@', targetValue, newValueArray)
    // 判断 value 数组中 > targetValue 的前一个 value
    // 假设 targetValue 是 600 ，而 value 组成的数组是 [300 ,500 ,800 ,1200 ,1700]
    // 如果找到了，就将 index -1 ；否则，则是最后一个元素（或许 targetValue 是 1900）
    // 如果 targetValue 是 200 ，则返回 -1 ，因为 300 > 200
    let findIndex = newValueArray.length - 1
    for (let i = 0; i < newValueArray.length; i++) {
        const value = newValueArray[i]
        if (value > targetValue) {
            findIndex = i - 1
            break
        }
    }
    if (findIndex < 0) {
        // 不展示 tabs，即跳过
    }
    console.log('@@@ findTabKey @@@@', targetValue, findIndex)
    
    for (const [key, value] of map) {
        if (value >= targetValue) {
            return key
        }
    }
    return null
}