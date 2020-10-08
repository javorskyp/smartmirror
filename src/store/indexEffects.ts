import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from './actionTypes/action-types';
import * as effects from './effects/auth-effects';

export function* watchAuth() {
    yield takeEvery(actionTypes.LOGIN, effects.login);
    yield takeEvery(actionTypes.LOGIN_SUCCESS, effects.loginSuccess);
    yield takeEvery(actionTypes.INIT_USER_DATA, effects.initUserData);
}