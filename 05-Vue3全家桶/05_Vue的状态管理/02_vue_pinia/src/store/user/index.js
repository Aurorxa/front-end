import {defineStore} from "pinia";

const useUserStore = defineStore('user', {
    state: () => ({
        name: '许大仙',
        age: 18,
        height: 1.88,
        friends: [
            {id: 111, name: '张三', age: 18},
            {id: 112, name: '李四', age: 19},
            {id: 113, name: '王五', age: 20},
        ]
    }),
    getters: {
        getFriendsById: (state) => (id) => state.friends.find(item => item.id === id)
    },
    actions: {},
})

export default useUserStore