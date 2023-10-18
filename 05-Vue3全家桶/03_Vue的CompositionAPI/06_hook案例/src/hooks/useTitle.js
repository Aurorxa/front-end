import {ref, watch} from "vue";

export default function useTitle(titleValue) {
    
    const titleRef = ref(titleValue || '')
    
    watch(titleRef, (newValue) => {
        document.title = newValue
    }, {
        immediate: true
    })
    
    return titleRef
}