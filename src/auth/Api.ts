import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CredentialsDto } from '../interfaces/dto/credentials-dto.interface';
import { TokenRo } from '../interfaces/ro/token-ro.interface';
import { API } from '../env';

export const login = async (data: CredentialsDto): Promise<AxiosResponse<TokenRo>> => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: `${API}/auth/authenticate`,
        data
    }

    return await Axios.request<TokenRo>(requestConfig);
}