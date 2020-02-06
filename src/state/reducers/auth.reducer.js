import {
    actionTypes
} from '@constants';


const initialState = {
    isLoginSuccess: false,
    isLoaded: false,
    isLoading: false,
    status: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return { ...state, isLoading: true, isLoaded: false };
        case actionTypes.LOGIN_USER_SUCCESS:
            const token = action.result.token;
            return { ...state, isLoading: false, isLoaded: true, token, isLoginSuccess: true };
        case actionTypes.LOGIN_USER_FAIL:
            return { ...state, isLoading: false, isLoaded: false, isLoginSuccess: false, error: action.error };
        default:
            return state;
    }
}