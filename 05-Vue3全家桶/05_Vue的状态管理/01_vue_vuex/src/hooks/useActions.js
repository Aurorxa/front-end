import {mapActions, useStore} from "vuex";

export default function useActions(mapper) {
    const store = useStore()
    const mapMutationsFnsObj = mapActions(mapper)
    const newMapMutationsFnsObj = {}
    Object.keys(mapMutationsFnsObj).forEach(key => {
        newMapMutationsFnsObj[key] = mapMutationsFnsObj[key].bind({$store: store})
        // newMapMutationsFnsObj[key] = Object.getOwnPropertyDescriptor(mapMutationsFnsObj, key).value.bind({$store: store})
    })
    
    return newMapMutationsFnsObj
}