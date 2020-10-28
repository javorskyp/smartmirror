import React, { useEffect } from 'react';
import * as todoistService from '../services/todoist-service';
import { AccessTokenRo } from '../interfaces/ro/access-token-ro.interface';
import { AxiosResponse } from 'axios';
import { useHistory } from 'react-router-dom';

const TodoistOauthRedirectPage = () => {
    const history = useHistory();
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');

        if (!code) {
            return;
        }

        const requestToken = async () => {
            const response: AxiosResponse<AccessTokenRo> = await todoistService.requestAccessToken(code);
            await todoistService.saveAccessToken(response.data.access_token);
            history.push('/');
        };

        requestToken();
    }, []);

    return <div>ok</div>;
};

export default TodoistOauthRedirectPage;
