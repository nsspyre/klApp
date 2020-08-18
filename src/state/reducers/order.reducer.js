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
                    options: state.currentOrder.options.map((option, i) =>
                        i === index ? { ...option, selected: option.isMultiple ? [...option.selected, id] : nextSelected } : option)
                },
                pending: false,
            };
        case actionTypes.SET_SIZE_SELECTED_OPTION:
            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    sizes: {
                        ...state.currentOrder.sizes,
                        sizesSelected: action.payload,
                    }
                },
                pending: false,
            }
        case actionTypes.CLEAR_SELECTED_OPTION:
            const { indexr, idr } = get(action, 'payload', {});

            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    options: state.currentOrder.options.map((option, i) =>
                        i === indexr ? { ...option, selected: remove(option.selected, selected => selected !== idr) } : option)
                }
            }
        default:
            return state;
    }
}
