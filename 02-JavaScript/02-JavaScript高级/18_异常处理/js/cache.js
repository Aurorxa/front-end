class Cache {
    setCache(key, value) {
        localStorage.setItem(key, value)
    }
    
    getCache(key) {
        return localStorage.getItem(key)
    }
    
    removeCache(key) {
        localStorage.removeItem(key)
    }
    
    clearCache() {
        localStorage.clear()
    }
    
}