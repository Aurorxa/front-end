import {defineStore} from "pinia"
import dayjs from "dayjs"

export const useMainStore = defineStore('main', {
    state: () => ({
        startDate: new Date(),
        endDate: dayjs().add(1, 'day'),
    }),
    actions: {},
    getters: {},
    persist: true,
})



