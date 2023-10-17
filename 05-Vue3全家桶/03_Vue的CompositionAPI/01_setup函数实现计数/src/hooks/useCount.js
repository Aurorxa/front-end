import {ref} from "vue";

export default function useCount() {
    let count = ref(100)
    const increment = () => {
        count.value++
    }
    
    const decrement = () => {
        count.value--
    }
    return {count, increment, decrement}
}