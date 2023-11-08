function request(url: string, method: "GET" | "POST") {
    console.log(url, method)
}

const info = {
    url: "https://www.baidu.com",
    method: "GET"
}

// 解决方案 ① ：使用 as 对 info.method 进行类型断言
request(info.url, info.method as "GET")

// 解决方案 ② ：
const info2: { url: string, method: 'GET' | 'POST' } = {
    url: "https://www.baidu.com",
    method: "GET"
}
request(info2.url, info2.method)

const info3 = {
    url: "https://www.baidu.com",
    method: "GET"
} as const

request(info3.url, info3.method)

export {}