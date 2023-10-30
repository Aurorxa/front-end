import {defineStore} from "pinia"
import {showNotify} from "vant";
import {getHotSuggests} from "@/services/index.js";

export const useHomeStore = defineStore('home', {
    state: () => ({
        hotSuggests: [],
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
        }
    },
    getters: {}
})



