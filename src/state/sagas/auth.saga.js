import { put, call, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../api';
import { actionTypes } from '@constants';
import AsyncStorage from '@react-native-community/async-storage';

import { NavigationService } from '@services';
import { routesFeed } from '@constants';

export function* userLogin({ payload }) {
    try {
        const result = yield call(apiCall, 'auth/login', payload, 'POST')

        yield put({ type: actionTypes.LOGIN_USER_SUCCESS, result })
        const { token } = result;
        yield AsyncStorage.setItem('token', token);
        NavigationService.navigate(routesFeed.FEED);
    } catch(error) {
        yield put({ type: actionTypes.LOGIN_USER_FAIL, error })
    }
}

export function* userSignup({ payload }) {
    try {
        const result = yield call(apiCall, 'auth/signup', payload, 'POST');
        yield put({ type: actionTypes.SIGNUP_USER_SUCCESS, result })
        const { token } = result;
        AsyncStorage.setItem('token', token);
        NavigationService.navigate(routesFeed.FEED);
    } catch(error) {
        yield put({ type: actionTypes.SIGNUP_USER_FAIL, error })
    }
}

export default function* auth() {
    yield takeLatest(actionTypes.LOGIN_USER, userLogin);
    yield takeLatest(actionTypes.SIGNUP_USER, userSignup);
}
