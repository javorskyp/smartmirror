import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CredentialsDto } from '../interfaces/dto/credentials-dto.interface';
import { TokenRo } from '../interfaces/ro/token-ro.interface';

export const login = async (data: CredentialsDto): Promise<AxiosResponse<TokenRo>> => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: `/auth/authenticate`,
        data
    }

    return await Axios.request<TokenRo>(requestConfig);
}