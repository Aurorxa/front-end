import axios from 'axios'
import {BASE_URL, TIMEOUT} from "@/services/request/config.js"
import {showLoadingToast, showNotify} from "vant";

class AxiosRequest {
    
    constructor(baseURL = "", timeout = 3000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
        
        this.instance.interceptors.request.use((config) => {
            this.loadingToast = showLoadingToast({
                message: '加载中...',
                forbidClick: true,
                loadingType: 'spinner',
                duration: 0
            })
            console.log('this', this.loadingToast)
            return config;
        }, (error) => {
            const {loadingToast} = this
            if (loadingToast) {
                loadingToast.close()
            }
            return Promise.reject(error);
        })
        
        // 响应拦截器
        this.instance.interceptors.response.use((response) => {
            const {loadingToast} = this
            if (loadingToast) {
                loadingToast.close()
            }
            return response;
        }, (error) => {
            const {loadingToast} = this
            if (loadingToast) {
                loadingToast.close()
            }
            const {config: {url}, message} = error
            showNotify({type: 'danger', message: `${url} ${message}`})
            return Promise.reject(error);
        });
    }
    
    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
    
    get(url = '', config = {}) {
        return this.request({...config, url, method: 'GET'})
    }
    
    post(url = '', data = {}, config = {}) {
        return this.request({...config, url, method: 'POST', data})
    }
    
}

export default new AxiosRequest(BASE_URL, TIMEOUT)