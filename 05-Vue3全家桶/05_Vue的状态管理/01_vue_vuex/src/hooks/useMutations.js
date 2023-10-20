import {mapMutations, useStore} from "vuex";

export default function useMutations(mapper) {
    const store = useStore()
    const mapMutationsFnsObj = mapMutations(mapper)
    const newMapMutationsFnsObj = {}
    Object.keys(mapMutationsFnsObj).forEach(key => {
        newMapMutationsFnsObj[key] = mapMutationsFnsObj[key].bind({$store: store})
    })
    
    return newMapMutationsFnsObj
}