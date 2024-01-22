import {defineStore} from "pinia";
import {getHouseDetail} from "@/services/modules/house.js"

export const useHouseStore = defineStore('house', {
    state: () => ({
        detail: {},
    }),
    actions: {
        
        async fetchHouseDetail(id) {
            try {
                const {data} = await getHouseDetail(id)
                this.detail = data
            } catch (error) {
                console.error('fetchHouseDetail error', error)
                // 让表单组件显示错误
                return error
            }
            
        },
        
    },
    getters: {},
})