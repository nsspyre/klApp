import { actionTypes } from '@constants';

export const setCurrentOrder = (payload) => ({
    type: actionTypes.CURRENT_ORDER,
    payload,
});

export const setSelectedIndexOption = (payload) => ({
    type: actionTypes.SET_SELECTED_INDEX_OPTION,
    payload,
});

export const setSelectedOptions = (payload) => ({
    type: actionTypes.SET_SELECTED_OPTIONS,
    payload,
});

export const clearSelectedOption = (payload) => ({
    type: actionTypes.CLEAR_SELECTED_OPTION,
    payload,
});
