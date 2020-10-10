import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const fetchConfig = async (): Promise<AxiosResponse<any>> => {
    const requestConfig: AxiosRequestConfig = {
        method: 'get',
        url: `/config`,
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }

    return await Axios.request<any>(requestConfig);
}