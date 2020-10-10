import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AccessTokenDto } from '../interfaces/dto/access-token-dto.interface';
import { CLIENT_ID, CLIENT_SECRET } from '../env';
import { AccessTokenRo } from '../interfaces/ro/access-token-ro.interface';
import { SaveTokenDto } from '../interfaces/dto/save-token-dto.interface';
import { TodoistTaskRo } from '../interfaces/ro/todoist-task-ro.interface';

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
        url: `/todoistconfig/token`,
        data: saveTokenDto,
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }

    return await Axios.request<null>(requestConfig);
}

export const fetchTasks = async (): Promise<AxiosResponse<TodoistTaskRo[]>> => {
    const requestConfig: AxiosRequestConfig = {
        method: 'get',
        url: `/tasks`,
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }

    return await Axios.request<TodoistTaskRo[]>(requestConfig);
}