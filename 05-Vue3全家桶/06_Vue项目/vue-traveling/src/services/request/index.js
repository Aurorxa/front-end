import axios from 'axios'
import {BASE_URL, TIMEOUT} from "@/services/request/config.js"
import {showNotify} from "vant";

class AxiosRequest {
    
    constructor(baseURL = "", timeout = 3000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
        
        // 响应拦截器
        this.instance.interceptors.response.use(function (response) {
            
            return response;
        }, function (error) {
            const {config: {url}, message} = error.toJSON()
            showNotify({type: 'danger', message: `${url} ${message}`});
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