import { actionTypes } from '@constants';

export const getUserFeed = payload => ({
    type: actionTypes.FEED_ORDERS,
    payload
});
