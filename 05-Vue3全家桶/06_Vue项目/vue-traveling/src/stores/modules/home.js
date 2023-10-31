import {defineStore} from "pinia"
import {showNotify} from "vant"
import {getCategories, getHotSuggests, getHouseList} from "@/services/index.js"

export const useHomeStore = defineStore('home', {
    state: () => ({
        hotSuggests: [],
        categories: [],
        houseList: [],
        currentHousePage: 1, // 当前页码
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
        async fetchHouseList() {
            try {
                const {data} = await getHouseList(this.currentHousePage)
                this.houseList.push(...data)
                this.currentHousePage++
            } catch (error) {
                showNotify({type: 'danger', message: error});
                // 让表单组件显示错误
                return error
            }
        }
    },
    getters: {}
})



