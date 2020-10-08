import { loginFailure } from '../actions/auth-actions';
import * as actionTypes from '../actionTypes/action-types';

type InitialState = {
    loggedIn: boolean;
    token: string | null;
    loginFailureMessage: string | null;
    isLoading: boolean;
}

const initialState: InitialState = {
    loggedIn: false,
    token: null,
    loginFailureMessage: null,
    isLoading: false
}

export const authReducer = (state = initialState, action): InitialState => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                token: action.tokenData.token,
                isLoading: false
            };
        case actionTypes.CLEAR_RESPONSE_ERROR:
            return {
                ...state,
                loginFailureMessage: null
            }
        case actionTypes.LOGIN_FAILURE:
            return {
                ...state,
                loginFailureMessage: action.message,
                isLoading: false
            }
        case actionTypes.INIT_USER_DATA_SUCCESS:
            return {
                ...state,
                token: action.tokenData.token,
                loggedIn: true
            }
        default:
            return state;
    }
}