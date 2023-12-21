import {mapState, useStore} from "vuex";
import {computed} from "vue";

export default function useState(namespace, mapper) {
    const store = useStore()
    const stateFnsObj = mapState(namespace, mapper)
    const newState = {}
    Object.keys(stateFnsObj).forEach(key => {
        newState[key] = computed(stateFnsObj[key].bind({$store: store}))
    })
    
    return newState
}