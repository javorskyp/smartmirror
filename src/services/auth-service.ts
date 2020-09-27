import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const fetchBackendToken = async (idToken: string): Promise<AxiosResponse<{ token: string }>> => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: `/auth/token`,
        data: {
            "token": idToken
        }
    }

    return await Axios.request<{ token: string }>(requestConfig);
}