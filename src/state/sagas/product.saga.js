import { put, call, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../api';
import { actionTypes } from '@constants';

export function* getProducts() {
    try {
        const { result } = yield call(apiCall, 'products', null, 'GET')
        yield put({ type: actionTypes.PRODUCTS_SUCCESS, result })
    } catch(error) {
        yield put({ type: actionTypes.PRODUCTS_FAIL, error })
    }
}

export default function* products() {
    yield takeLatest(actionTypes.PRODUCTS, getProducts);
}
