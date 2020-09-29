import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from './actionTypes/action-types';
import { login } from './effects/auth';

export function* watchAuth() {
    yield takeEvery(actionTypes.LOGIN, login)
}