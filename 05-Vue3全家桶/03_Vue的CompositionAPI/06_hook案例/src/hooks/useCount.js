import {ref} from "vue";

export default function useCount() {
    const count = ref(100)
    const increment = () => {
        count.value++
    }
    
    const decrement = () => {
        count.value--
    }
    return {
        count,
        increment,
        decrement
    }
}