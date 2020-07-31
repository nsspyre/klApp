import {
    actionTypes
} from '@constants';
import { get } from 'lodash';

const initialState = {
    data: {},
    pending: false,
    error: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FEED_ORDERS:
            return { ...state, pending: true };
        case actionTypes.FEED_ORDERS_SUCCESS:
            return { ...state, pending: false, data: get(action, 'result', {}) };
        case actionTypes.FEED_ORDERS_FAIL:
            return { ...state, pending: false, error: action.error };
        default:
            return state;
    }
}