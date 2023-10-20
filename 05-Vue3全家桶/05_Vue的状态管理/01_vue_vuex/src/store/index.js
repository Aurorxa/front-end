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
        },
        incrementPayload(state, payload) {
            state.count += payload
        }
    },
    actions: {
        asyncIncrement(context, payload) {
            setTimeout(() => {
                context.commit('incrementPayload', payload)
            }, 3000)
        }
    },
    modules: {},
    plugins: [createLogger()]
})
