import {showNotify} from "vant";

export async function useLocation() {
    const getLocation = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve(position);
            }, error => {
                reject(error);
            }, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
            });
        })
    }
    
    try {
        const location = await getLocation()
        const {coords: {latitude, longitude}} = location
        const fetchResult = await fetch(`https://api.oioweb.cn/api/ip/geocoder?lng=${longitude}&lat=${latitude}`)
        const {code, result: {address_component: {city}}} = await fetchResult.json()
        if (code === 200) {
            showNotify(
                {
                    type: 'primary', message: `${city}`
                }
            )
        }
        return {
            city
        }
    } catch (e) {
        showNotify(
            {
                type: 'danger', message: `获取位置失败`
            });
        console.error("获取位置失败", e)
        return {
            city: '北京市'
        }
    }
}