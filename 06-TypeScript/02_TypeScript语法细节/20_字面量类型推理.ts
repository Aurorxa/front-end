function request(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD') {
  // ...
}

const req = {
  url: 'http://localhost:3000/api/v1/users/1',
  method: 'GET'
} as const // 使用 `as const` 将对象转换为字面量类型，解决报错问题

request(req.url, req.method ) 

export { }