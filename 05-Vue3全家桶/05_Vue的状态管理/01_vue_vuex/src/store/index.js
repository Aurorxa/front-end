import {createLogger, createStore} from 'vuex'

export default createStore({
    state() {
        return {
            count: 0,
            name: "许大仙",
            age: 18
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {},
    modules: {},
    plugins: [createLogger()]
})
