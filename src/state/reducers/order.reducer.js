import {
    actionTypes
} from '@constants';
import { get, remove } from 'lodash';

const initialState = {
    data: {},
    currentOrder: {},
    pending: false,
    error: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_CURRENT_ORDER:
            return { ...state, pending: false, currentOrder: action.currentOrder };
        case actionTypes.SET_SELECTED_INDEX_OPTION:
        case actionTypes.SET_SELECTED_OPTIONS:
            const { index, id, nextSelected } = get(action, 'payload', {});

            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    productOptions: state.currentOrder.productOptions.map((productOption, i) =>
                        i === index ? { ...productOption, selected: productOption.isMultiple ? [...productOption.selected, id] : nextSelected } : productOption)
                },
                pending: false,
            };
        case actionTypes.CLEAR_SELECTED_OPTION:
            const { indexr, idr } = get(action, 'payload', {});

            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    productOptions: state.currentOrder.productOptions.map((productOption, i) =>
                        i === indexr ? { ...productOption, selected: remove(productOption.selected, selected => selected !== idr) } : productOption)
                }
            }
        default:
            return state;
    }
}
