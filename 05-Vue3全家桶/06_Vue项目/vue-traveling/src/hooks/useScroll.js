import {onActivated, onDeactivated, onMounted, onUnmounted, ref} from "vue";

export function useScroll() {
    
    const isReachBottom = ref(false)
    const scrollListenerHandler = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
        if (scrollHeight <= clientHeight + scrollTop) {
            console.log('滚动到底部了')
            isReachBottom.value = true
        }
    }
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
        isReachBottom
    }
}