import { put, call, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../api';
import { actionTypes } from '@constants';

export function* getUserOrdersFeed({ payload }) {
    try {
        const { result } = yield call(apiCall, `feed/${payload}`, null, 'GET')

        yield put({ type: actionTypes.FEED_ORDERS_SUCCESS, result })
    } catch(error) {
        yield put({ type: actionTypes.FEED_ORDERS_FAIL, error })
    }
}

export default function* feed() {
    yield takeLatest(actionTypes.FEED_ORDERS, getUserOrdersFeed);
}
