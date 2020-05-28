import { actionTypes } from '@constants';

export const userLogin = payload => ({
    type: actionTypes.LOGIN_USER,
    payload
});

export const postUserSignup = payload => ({
    type: actionTypes.SIGNUP_USER,
    payload
});
