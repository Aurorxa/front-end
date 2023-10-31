import {onActivated, onDeactivated, onMounted, onUnmounted, ref} from "vue"
import {throttle} from "underscore"

export function useScroll() {
    
    const isReachBottom = ref(false)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)
    const clientHeight = ref(0)
    const scrollListenerHandler = throttle(() => {
        scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop
        scrollHeight.value = document.documentElement.scrollHeight || document.body.scrollHeight
        clientHeight.value = document.documentElement.clientHeight || document.body.clientHeight
        if (scrollHeight.value <= clientHeight.value + scrollTop.value) {
            console.log('滚动到底部了')
            isReachBottom.value = true
        }
    }, 100)
    onMounted(() => {
        window.addEventListener('scroll', scrollListenerHandler)
    })
    onActivated(() => {
        window.addEventListener('scroll', scrollListenerHandler)
    })
    onUnmounted(() => {
        window.removeEventListener('scroll', scrollListenerHandler)
    })
    onDeactivated(() => {
        window.removeEventListener('scroll', scrollListenerHandler)
    })
    
    return {
        isReachBottom,
        scrollTop,
        scrollHeight,
        clientHeight
    }
}