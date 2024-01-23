import axios from 'axios'
import {BASE_URL, TIMEOUT} from "@/services/request/config"

class AxiosWrapper {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      timeout: TIMEOUT,
      headers: {}
    })
    
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        this.showLoading()
        return config
      },
      (error) => {
        this.closeLoading()
        return Promise.reject(error)
      }
    )
    
    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        this.closeLoading()
        return response.data
      },
      async (error) => {
        this.closeLoading()
        // 如果 HTTP 的状态码 是 401 ，就表示权限不足，需要跳转到登录页面
        if (error.response?.status === 401) {
          this.showErrorNotification('登录失败，请重新登录！！！')
          return Promise.reject(error)
        }
        // 错误的默认情况
        this.showErrorNotification(error)
        return Promise.reject(error)
      }
    )
  }
  
  // 显示加载中...
  showLoading() {
    // this.loading = ElLoading.service({
    //   lock: true,
    //   text: 'Loading',
    //   background: 'rgba(0, 0, 0, 0.7)',
    //   fullscreen: true,
    //   target: 'body'
    // })
  }
  
  // 关闭加载中...
  closeLoading() {
    // const { loading } = this
    // if (loading) {
    //   loading.close()
    // }
  }
  
  // 展示错误消息
  showErrorNotification(message) {
  }
  
  get(url, config) {
    return this.instance.get(url, config)
  }
  
  post(url, data, config) {
    return this.instance.post(url, data, config)
  }
  
  put(url, data, config) {
    return this.instance.put(url, data, config)
  }
  
  delete(url, config) {
    return this.instance.delete(url, config)
  }
  
  patch(url, data, config) {
    return this.instance.patch(url, data, config)
  }
  
  // Add other HTTP methods as needed
}

const api = new AxiosWrapper(BASE_URL)

export default api

