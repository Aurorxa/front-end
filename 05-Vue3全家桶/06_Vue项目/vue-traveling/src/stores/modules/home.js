import {defineStore} from "pinia"
import {showNotify} from "vant"
import {getCategories, getHotSuggests, getHouseList} from "@/services/index.js"

export const useHomeStore = defineStore('home', {
    state: () => ({
        hotSuggests: [],
        categories: [],
        houseList: []
    }),
    actions: {
        async fetchHotSuggests() {
            try {
                const {data} = await getHotSuggests()
                this.hotSuggests = data
            } catch (error) {
                showNotify({type: 'danger', message: error});
                // 让表单组件显示错误
                return error
            }
        },
        async fetchCategories() {
            try {
                const {data} = await getCategories()
                this.categories = data
            } catch (error) {
                showNotify({type: 'danger', message: error});
                // 让表单组件显示错误
                return error
            }
        },
        async fetchHouseList(page = 1) {
            try {
                const {data} = await getHouseList(page)
                this.houseList = data
            } catch (error) {
                showNotify({type: 'danger', message: error});
                // 让表单组件显示错误
                return error
            }
        }
    },
    getters: {}
})



