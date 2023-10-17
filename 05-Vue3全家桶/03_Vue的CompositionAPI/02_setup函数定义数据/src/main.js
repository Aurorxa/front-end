import {createApp} from 'vue'
import App from '@/App.vue'
import pino from 'pino';
import pinoPretty from 'pino-pretty';

const logger = pino({
    prettyPrint: {
        translateTime: 'SYS:standard',
    },
}, pinoPretty());

const app = createApp(App)
app.config.globalProperties.$logger = logger;
app.mount('#app')
