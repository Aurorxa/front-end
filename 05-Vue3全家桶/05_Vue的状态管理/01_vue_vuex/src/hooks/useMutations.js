import {mapMutations, useStore} from "vuex";

export default function useMutations(namespace, mapper) {
    const store = useStore()
    const mapActionsFnsObj = mapMutations(namespace, mapper)
    console.log('@@', mapActionsFnsObj)
    const newMapActionsFnsObjFnsObj = {}
    Object.keys(mapActionsFnsObj).forEach(key => {
        newMapActionsFnsObjFnsObj[key] = mapActionsFnsObj[key].bind({$store: store})
    })
    console.log('##', newMapActionsFnsObjFnsObj)
    return newMapActionsFnsObjFnsObj
}