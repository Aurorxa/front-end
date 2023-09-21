$(function () {
    /**
     * 渲染头部地址
     * @param res
     */
    function renderHeaderAddress(res) {
        const {curLocation: {city}} = res
        $(".top-bar .address").text(city)
    }
    
    function init() {
        ARequest
            .get(API.HOME_PAGE_INFO)
            .then(res => {
                console.log('res', res)
                renderHeaderAddress(res)
            }).catch(err => {
            console.log('err', err)
        })
    }
    
    init()
    
})