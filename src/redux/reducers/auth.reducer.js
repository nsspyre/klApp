import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../../costs/actionTypes';


const initialState = {
    isLoginSuccess: false,
    isLoaded: false,
    isLoading: false,
    status: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, isLoading: true, isLoaded: false };
        case LOGIN_USER_SUCCESS:
            const token = action.result.token;
            return { ...state, isLoading: false, isLoaded: true, token, isLoginSuccess: true };
        case LOGIN_USER_FAIL:
            return { ...state, isLoading: false, isLoaded: false, isLoginSuccess: false, error: action.error };
        default:
            return state;
    }
}