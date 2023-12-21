import {mapGetters, useStore} from "vuex";
import {computed} from "vue";

export default function useGetters(namespace, mapper) {
    const store = useStore()
    const gettersFnsObj = mapGetters(namespace, mapper)
    const newGetters = {}
    console.log('@', gettersFnsObj)
    Object.keys(gettersFnsObj).forEach(key => {
        newGetters[key] = computed(gettersFnsObj[key].bind({$store: store}))
    })
    
    return newGetters
}