import axiosRequest from "@/services/request"

export const getHotSuggests = () => {
    return axiosRequest.get('/home/hotSuggests')
}

export const getCategories = () => {
    return axiosRequest.get('/home/categories')
}