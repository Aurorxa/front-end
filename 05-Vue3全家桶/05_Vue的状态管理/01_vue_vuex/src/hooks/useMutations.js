import {mapActions, useStore} from "vuex";

export default function useMutations(mapper) {
    const store = useStore()
    const mapActionsFnsObj = mapActions(mapper)
    const newMapActionsFnsObjFnsObj = {}
    Object.keys(mapActionsFnsObj).forEach(key => {
        newMapActionsFnsObjFnsObj[key] = mapActionsFnsObj[key].bind({$store: store})
    })
    
    return newMapActionsFnsObjFnsObj
}