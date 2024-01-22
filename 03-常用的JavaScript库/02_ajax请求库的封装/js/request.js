;(function (window, $) {
    
    function request({url = '', method = 'GET', timeout = 0, data = {}, ...config} = {}) {
        return $.ajax({
            url: url,
            method: method,
            timeout: timeout,
            data: data,
            ...config
        })
    }
    
    function get(url, data, config) {
        return request({
            url,
            method: 'GET',
            data,
            ...config
        })
    }
    
    function post(url, data, config) {
        return request({
            url,
            method: 'POST',
            data,
            ...config
        })
    }
    
    window.ARequest = {
        request,
        get,
        post
    }
    
})(window, jQuery)