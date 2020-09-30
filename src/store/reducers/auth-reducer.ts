import * as actionTypes from '../actionTypes/action-types';

type InitialState = {
    loggedIn: boolean;
    token: string | null;
}

const initialState: InitialState = {
    loggedIn: false,
    token: null
}

export const authReducer = (state = initialState, action): InitialState => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                token: action.tokenData.token
            };
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