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
        getCount(state) {
            return state.count
        },
        getName(state) {
            return state.name
        },
        getAge(state) {
            return state.age
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
