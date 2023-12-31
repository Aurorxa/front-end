export default {
    namespaced: true,
    state: () => ({
        count: 0,
        name: "许大仙",
        age: 18
    }),
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
        incrementAction(context, payload) {
            setTimeout(() => {
                context.commit('incrementPayload', payload)
            }, 1000)
        }
    }
}