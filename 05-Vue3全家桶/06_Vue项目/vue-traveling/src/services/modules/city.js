import axiosRequest from "@/services/request"

export const getAllCity = () => {
    return axiosRequest.get('/city/all')
}
