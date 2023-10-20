import {mapActions, useStore} from "vuex";

export default function useActions(namespace, mapper) {
    const store = useStore()
    const mapMutationsFnsObj = mapActions(namespace, mapper)
    const newMapMutationsFnsObj = {}
    Object.keys(mapMutationsFnsObj).forEach(key => {
        newMapMutationsFnsObj[key] = mapMutationsFnsObj[key].bind({$store: store})
    })
    
    return newMapMutationsFnsObj
}