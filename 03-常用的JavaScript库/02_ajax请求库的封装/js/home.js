$(function () {
    
    function renderHeaderAddress(res) {
        const {curLocation: {city}} = res
        $(".top-bar .address").text(city)
    }
    
    function init() {
        ARequest
            .get('http://123.207.32.32:9060/beike/api/homePageInfo')
            .then(res => {
                console.log('res', res)
                renderHeaderAddress(res)
            }).catch(err => {
            console.log('err', err)
        })
    }
    
    init()
    
})