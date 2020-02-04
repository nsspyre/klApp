import { LOGIN_USER } from '../../costs/actionTypes';

export const userLogin = payload => ({
    type: LOGIN_USER,
    payload
});
