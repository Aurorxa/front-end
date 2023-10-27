import {defineStore} from "pinia"
import {showNotify} from "vant";
import {getAllCity} from "@/services/index.js";

export const useCityStore = defineStore('city', {
    state: () => ({
        allCities: {}
    }),
    actions: {
        async fetchAllCity() {
            try {
                const {data} = await getAllCity()
                this.allCities = data
            } catch (error) {
                showNotify({type: 'danger', message: error});
                // 让表单组件显示错误
                return error
            }
        }
    },
    getters: {}
})



