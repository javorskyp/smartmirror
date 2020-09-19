import React, { useEffect } from 'react';
import { CLIENT_SECRET } from '../env';
import * as authService from '../services/auth-service';
import { AccessTokenRo } from '../interfaces/ro/access-token-ro.interface';
import { AxiosResponse } from 'axios';

const TodoistOauthRedirectPage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    useEffect(() => {
        if (!code) return;

        authService.requestAccessToken(code)
            .then((response: AxiosResponse<AccessTokenRo>) => {
                return response.data.access_token;
            })
            .then((token: string) => {
                authService.saveAccessToken(token);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {state !== CLIENT_SECRET ? 'Ktoś podmienił coś po drodze...' : 'OK'}
            {window.URL}
        </div>
    )

}

export default TodoistOauthRedirectPage;