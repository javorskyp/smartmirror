import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AccessTokenDto } from '../interfaces/dto/access-token-dto.interface';
import { CLIENT_ID, CLIENT_SECRET } from '../env';
import { AccessTokenRo } from '../interfaces/ro/access-token-ro.interface';
import { SaveTokenDto } from '../interfaces/dto/save-token-dto.interface';

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

export const requestAccessToken = async (code: string): Promise<AxiosResponse<AccessTokenRo>> => {
    const accessTokenDto: AccessTokenDto = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code
    }

    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        baseURL: 'https://todoist.com/oauth',
        url: `/access_token`,
        params: accessTokenDto
    }

    return await Axios.request<AccessTokenRo>(requestConfig);
}

export const saveAccessToken = async (token: string): Promise<AxiosResponse<null>> => {
    const saveTokenDto: SaveTokenDto = {
        token: token
    }

    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: `/auth/set-token`,
        data: saveTokenDto,
        headers: {
            "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJOMVBXR2liRHN0aENqanVtbnllaU1UOWtjYVAyIiwiZXhwIjoxNzAxNDYzMDIwfQ.MFUuraJRq9ld0uwQAyM2ZkxAbvgzlz2PfrmXrTbpwNC1kGkjV2opiRQsv6N-H5R0XMs9Xd_Jru2Wu67qfkfI8g`
        }
    }

    return await Axios.request<null>(requestConfig);
}