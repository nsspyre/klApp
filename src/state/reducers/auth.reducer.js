import {
    actionTypes
} from '@constants';
import { get } from 'lodash';

const initialState = {
    pending: false,
    status: 0,
    token: '',
    error: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
        case actionTypes.SIGNUP_USER:
            return { ...state, pending: true };
        case actionTypes.LOGIN_USER_SUCCESS:
        case actionTypes.SIGNUP_USER_SUCCESS:
            const token = get(action, 'result.token', '');
            return { ...state, pending: false, token };
        case actionTypes.LOGIN_USER_FAIL:
        case actionTypes.SIGNUP_USER_FAIL:
            return { ...state, pending: false, error: action.error };
        default:
            return state;
    }
}