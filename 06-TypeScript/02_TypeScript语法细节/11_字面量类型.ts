function request(url: string, method: "GET" | "POST") {
    console.log(url, method)
}

const obj = {url: 'https://www.baidu.com', method: 'GET'} as const


request(obj.url, obj.method)

export {}