import axiosRequest from "@/services/request"

export const getHotSuggests = () => {
    return axiosRequest.get('/home/hotSuggests')
}