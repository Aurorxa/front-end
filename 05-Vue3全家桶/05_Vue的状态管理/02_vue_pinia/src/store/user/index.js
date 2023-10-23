import {defineStore} from "pinia";

const useUserStore = defineStore('user', {
    state: () => ({
        name: '许大仙',
        age: 18,
        height: 1.88
    }),
    getters: {},
    actions: {},
})

export default useUserStore