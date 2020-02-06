import { actionTypes } from '@constants';

export const userLogin = payload => ({
    type: actionTypes.LOGIN_USER,
    payload
});
