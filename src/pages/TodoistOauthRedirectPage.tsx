import React, { useEffect } from 'react';
import * as todoistService from '../services/todoist-service';
import { AccessTokenRo } from '../interfaces/ro/access-token-ro.interface';
import { AxiosResponse } from 'axios';

const TodoistOauthRedirectPage = () => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');

        console.log(code);
        console.log(state);

        if (!code) return;

        todoistService.requestAccessToken(code)
            .then((response: AxiosResponse<AccessTokenRo>) => {
                return response.data.access_token;
            })
            .then(async (token: string) => {
                todoistService.saveAccessToken(token);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            ok
        </div>
    )

}

export default TodoistOauthRedirectPage;