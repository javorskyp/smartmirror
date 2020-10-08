import { TokenRo } from '../../interfaces/ro/token-ro.interface';
import { CredentialsDto } from '../../interfaces/dto/credentials-dto.interface';
import * as actionTypes from '../actionTypes/action-types';

export type LoginAction = { type: string, loginData: CredentialsDto };
export function login(loginData: CredentialsDto): LoginAction {
    return {
        type: actionTypes.LOGIN,
        loginData
    }
}

export type LoginSuccessAction = { type: string, tokenData: TokenRo };
export function loginSuccess(tokenData: TokenRo): LoginSuccessAction {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        tokenData
    }
}

// export type 
export function loginFailure(message: string) {
    return {
        type: actionTypes.LOGIN_FAILURE,
        message
    }
}

export function initUserData() {
    return {
        type: actionTypes.INIT_USER_DATA
    }
}

export function initUserDataSuccess(tokenData: { token: string }) {
    return {
        type: actionTypes.INIT_USER_DATA_SUCCESS,
        tokenData
    }
}

export function clearResponseError() {
    return {
        type: actionTypes.CLEAR_RESPONSE_ERROR,
    }
}
