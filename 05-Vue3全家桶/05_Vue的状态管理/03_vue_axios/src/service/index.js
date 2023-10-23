import axios from 'axios'

class AxiosRequest {
    request(config) {
        return new Promise((resolve, reject) => {
            axios.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
    
    get(url, config = {}) {
        return this.request({...config, url, method: 'GET'})
    }
    
    post(url, data = {}, config = {}) {
        return this.request({...config, url, method: 'POST', data})
    }
    
}

export default new AxiosRequest()