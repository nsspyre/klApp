import { put, call, takeLatest, putResolve } from 'redux-saga/effects';
import { apiCall } from '../api';
import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../../costs/actionTypes';
import { AsyncStorage } from 'react-native';

import * as NavigationService from '../../services/navigation/navigation.service';

export function* userLogin({ payload }) {
    try {
        const result = yield call(apiCall, 'auth/login', payload, { headers: { 'Content-Type': 'application/json' } }, 'POST')

        yield put({ type: LOGIN_USER_SUCCESS, result })
        AsyncStorage.setItem('token', result.token)
        NavigationService.navigate('Products')
    } catch(error) {
        yield put({ type: LOGIN_USER_FAIL, error })
    }
}

export default function* auth() {
    yield takeLatest(LOGIN_USER, userLogin);
}
