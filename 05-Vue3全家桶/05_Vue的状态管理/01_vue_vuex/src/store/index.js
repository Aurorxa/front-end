import {createLogger, createStore} from 'vuex'

import home from '@/store/home'

export default createStore({
    modules: {
        home
    },
    plugins: [createLogger()]
})
