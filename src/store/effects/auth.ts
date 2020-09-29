import { put } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes/action-types';
import * as firebaseService from '../../services/firebase-serivce';

export function* login(action) {
    console.log(action);

    const response = yield firebaseService.loginUserWithEmailAndPassword({
        "email": action.email,
        "password": action.password
    });
    console.log(response);
    yield put({ type: actionTypes.LOGIN_SUCCESS });
}