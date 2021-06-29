import { put, call, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../api';
import { actionTypes } from '@constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* userLogin({ payload }) {
    try {
        const result = yield call(apiCall, 'auth/login', payload, 'POST')

        yield put({ type: actionTypes.LOGIN_USER_SUCCESS, result })
        const { token } = result;
        alert('result: '+JSON.stringify(result));
        yield AsyncStorage.setItem('token', token);
    } catch(error) {
        alert('error: '+JSON.stringify(error));
        yield put({ type: actionTypes.LOGIN_USER_FAIL, error })
    }
}

export function* userSignup({ payload }) {
    try {
        const result = yield call(apiCall, 'auth/signup', payload, 'POST');
        yield put({ type: actionTypes.SIGNUP_USER_SUCCESS, result })
        const { token } = result;
        alert('result: '+JSON.stringify(result));
        AsyncStorage.setItem('token', token);
    } catch(error) {
        alert('error: '+JSON.stringify(error));
        yield put({ type: actionTypes.SIGNUP_USER_FAIL, error })
    }
}

export default function* auth() {
    yield takeLatest(actionTypes.LOGIN_USER, userLogin);
    yield takeLatest(actionTypes.SIGNUP_USER, userSignup);
}
