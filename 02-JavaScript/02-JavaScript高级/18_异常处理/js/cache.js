class Cache {
    constructor(isLocal = true) {
        this.storage = isLocal ? localStorage : sessionStorage
    }
    
    setCache(key, value) {
        if (!value) {
            throw new Error('value cannot be empty~')
        }
        this.storage.setItem(key, value)
    }
    
    getCache(key) {
        const result = this.storage.getItem(key)
        if (result) {
            return JSON.parse(result)
        }
    }
    
    removeCache(key) {
        this.storage.removeItem(key)
    }
    
    clearCache() {
        this.storage.clear()
    }
    
}