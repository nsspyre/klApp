import {
    actionTypes
} from '@constants';
import { get } from 'lodash';

const initialState = {
    pending: false,
    isLoggedIn: false,
    status: 0,
    data: {},
    error: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
        case actionTypes.SIGNUP_USER:
            return { ...state, pending: true, isLoggedIn: false };
        case actionTypes.LOGIN_USER_SUCCESS:
        case actionTypes.SIGNUP_USER_SUCCESS:
            return { ...state, pending: false, data: get(action, 'result', {}), isLoggedIn: true };
        case actionTypes.LOGIN_USER_FAIL:
        case actionTypes.SIGNUP_USER_FAIL:
            return { ...state, pending: false, error: action.error, isLoggedIn: false };
        default:
            return state;
    }
}