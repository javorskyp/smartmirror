import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CredentialsDto } from '../interfaces/dto/credentials-dto.interface';
import { TokenRo } from '../interfaces/ro/token-ro.interface';

export const login = async (data: CredentialsDto): Promise<AxiosResponse<TokenRo>> => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: process.env.API + '/',
        data
    }

    return await Axios.request<TokenRo>(requestConfig);
}

export const register = async(data: CredentialsDto): Promise<AxiosResponse<TokenRo>> => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: process.env.API + '/register',
        data
    }
    
    return await Axios.request<TokenRo>(requestConfig);
}


