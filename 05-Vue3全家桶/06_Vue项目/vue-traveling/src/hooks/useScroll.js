import {onActivated, onDeactivated, onMounted, onUnmounted, ref} from "vue"
import {throttle} from "underscore"

export function useScroll(elRef) {
    let el = window
    const isReachBottom = ref(false)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)
    const clientHeight = ref(0)
    const scrollListenerHandler = throttle(() => {
        if (el === window) {
            scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop
            scrollHeight.value = document.documentElement.scrollHeight || document.body.scrollHeight
            clientHeight.value = document.documentElement.clientHeight || document.body.clientHeight
        } else {
            scrollTop.value = el.scrollTop
            scrollHeight.value = el.scrollHeight
            clientHeight.value = el.clientHeight
        }
        if (scrollHeight.value <= clientHeight.value + scrollTop.value) {
            isReachBottom.value = true
        }
    }, 100)
    onMounted(() => {
        if (elRef) {
            el = elRef.value
        }
        el.addEventListener('scroll', scrollListenerHandler)
    })
    onActivated(() => {
        if (elRef) {
            el = elRef.value
        }
        el.addEventListener('scroll', scrollListenerHandler)
    })
    onUnmounted(() => {
        if (elRef) {
            el = elRef.value
        }
        el.removeEventListener('scroll', scrollListenerHandler)
    })
    onDeactivated(() => {
        if (elRef) {
            el = elRef.value
        }
        el.removeEventListener('scroll', scrollListenerHandler)
    })
    
    return {
        isReachBottom,
        scrollTop,
        scrollHeight,
        clientHeight
    }
}