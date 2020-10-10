import { all, put } from 'redux-saga/effects';
import { TokenRo } from '../../interfaces/ro/token-ro.interface';

import * as firebaseService from '../../services/firebase-serivce';
import * as configService from '../../services/config-service';
import * as actions from '../actions/auth-actions';

export function* login(action: actions.LoginAction) {
    try {
        const response: TokenRo = yield firebaseService.loginUserWithEmailAndPassword({
            "email": action.loginData.email,
            "password": action.loginData.password
        });
        yield put(actions.loginSuccess(response));
    } catch (e) {
        yield put(actions.loginFailure(e.message));
    }
}

export function* loginSuccess(action: actions.LoginSuccessAction) {
    yield localStorage.setItem("token", action.tokenData.token);
}

export function* initUserData() {
    const token: string = yield localStorage.getItem("token");
    if (token) {
        yield all([
            put(actions.initUserDataSuccess({ token })),
            put(actions.fetchConfiguration())
        ])
    }
}

export function* fetchConfiguration(action) {
    try {
        const response = yield configService.fetchConfig();
        yield put(actions.configurationFetched(response.data));
    } catch (e) {

    }
}