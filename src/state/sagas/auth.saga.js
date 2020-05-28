import { put, call, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../api';
import { actionTypes } from '@constants';
import { AsyncStorage } from 'react-native';

import { NavigationService } from '@services';
import { routesProducts } from '@constants';

export function* userLogin({ payload }) {
    try {
        const result = yield call(apiCall, 'auth/login', payload, { headers: { 'Content-Type': 'application/json' } }, 'POST')

        yield put({ type: actionTypes.LOGIN_USER_SUCCESS, result })
        AsyncStorage.setItem('token', result.token)
        NavigationService.navigate('Products')
    } catch(error) {
        yield put({ type: actionTypes.LOGIN_USER_FAIL, error })
    }
}

export function* userSignup({ payload }) {
    try {
        const result = yield call(apiCall, 'auth/signup', payload, { headers: { 'Content-Type': 'application/json' } }, 'POST');
        yield put({ type: actionTypes.SIGNUP_USER_SUCCESS, result })
        console.log('result saga', result);
        AsyncStorage.setItem('token', result.token)
        NavigationService.navigate(routesProducts.PRODUCTS);
    } catch(error) {
        console.log('error saga', error);
        yield put({ type: actionTypes.SIGNUP_USER_FAIL, error })
    }
}

export default function* auth() {
    yield takeLatest(actionTypes.LOGIN_USER, userLogin);
    yield takeLatest(actionTypes.SIGNUP_USER, userSignup);
}
