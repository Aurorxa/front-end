$(function () {
    /**
     * 渲染头部地址
     * @param res
     */
    function renderHeaderAddress(res) {
        const {curLocation: {city}} = res
        $(".top-bar .address").text(city)
    }
    
    /**
     * 初始化页面
     */
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
    
    const $houseSearchInput = $('.search-bar .house-search')
    
    
    $houseSearchInput.on('focus', function () {
        console.log(this)
        $(this).css('display', 'block')
    })
    
})