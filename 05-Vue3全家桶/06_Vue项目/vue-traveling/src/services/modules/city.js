import axiosRequest from "@/services/request"

export const getCityAll = () => {
    return axiosRequest.get('/city/all')
}
