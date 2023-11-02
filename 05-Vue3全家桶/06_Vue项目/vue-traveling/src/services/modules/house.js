import axiosRequest from "@/services/request/index.js";

export const getHouseDetail = (id) => {
    return axiosRequest.get(`/detail/infos?houseId=${id}`)
}
