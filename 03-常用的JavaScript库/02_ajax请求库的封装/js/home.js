$(function () {
    /**
     * 渲染头部地址
     * @param res
     */
    function renderHeaderAddress(res) {
        const {curLocation: {city}} = res
        $(".top-bar .address")
            .text(city)
    }
    
    /**
     * 初始化页面
     */
    function init() {
        ARequest
            .get(API.HOME_PAGE_INFO)
            .then(res => {
                renderHeaderAddress(res)
            })
            .catch(err => {
                console.log('init --> err', err)
            })
    }
    
    /**
     * 渲染搜索结果
     * @param res
     */
    function renderSearchList(res = []) {
        const $searchList = $('.search-tips .search-list')
        $searchList.empty()
        $searchList.append(`<li><span>热门搜索</span></li>`)
        res = res.map((item) => {
            const {app_house_title} = item
            return {
                title: app_house_title
            }
        })
        res.forEach(item => {
            const {title} = item
            $searchList.append(`<li>${title}</li>`)
        })
    }
    
    /**
     * 清空搜索结果
     */
    function clearSearchList() {
        const $searchList = $('.search-tips .search-list')
        $searchList.empty()
    }
    
    /**
     * 站内搜索
     */
    function siteSearch() {
        const $houseSearchInput = $('.search-bar .house-search')
        $houseSearchInput.on('focus', function () {
            ARequest
                .get(API.SITE_SEARCH)
                .then(res => {
                    const {rent_house_list: {list}} = res
                    renderSearchList(list)
                })
                .catch(err => {
                    console.log('siteSearch --> err', err)
                })
        })
        $houseSearchInput.on('blur', function () {
            clearSearchList()
        })
        const $body = $(document.body)
        $body.on('click', function () {
            clearSearchList()
        })
    }
    
    init()
    siteSearch()
    
    
})