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
        case actionTypes.PRODUCTS:
            return { ...state, pending: true };
        case actionTypes.PRODUCTS_SUCCESS:
            return { ...state, pending: false, data: get(action, 'result', {}) };
        case actionTypes.PRODUCTS_FAIL:
            return { ...state, pending: false, error: action.error };
        default:
            return state;
    }
}
