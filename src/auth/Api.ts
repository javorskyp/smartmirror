import Axios, { AxiosRequestConfig } from 'axios';

export interface Credentials {
    username: string;
    password: string;
}

export const onLogin = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: '/auth/login',   /* może process.env.reactapp + login? */
        data

    }

    const {data: response} = await Axios.request(requestConfig);
    console.log(response)
}