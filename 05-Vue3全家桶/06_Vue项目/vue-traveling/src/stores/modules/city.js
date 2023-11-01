import {defineStore} from "pinia"
import {getAllCity} from "@/services/index.js";

export const useCityStore = defineStore('city', {
    state: () => ({
        allCities: {},
        currentCity: {}
    }),
    actions: {
        async fetchAllCity() {
            try {
                const {data} = await getAllCity()
                this.allCities = data
            } catch (error) {
                console.error('fetchAllCity error', error)
                // 让表单组件显示错误
                return error
            }
        }
    },
    getters: {},
    // persist: true,
})



