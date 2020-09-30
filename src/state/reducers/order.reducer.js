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
            const { index, id, nextSelected, option } = get(action, 'payload', {});
            const selectedOption = Object.assign(option, {});
            let restPrice = 0;
            let restCalories = 0;

            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    productOptions: state.currentOrder.productOptions.map((productOption, i) => {
                        if (i === index) {
                            if (!productOption.isMultiple && typeof productOption.selected === 'number' && productOption.selected >= 0) {
                                const currentOrderPrint = productOption.options[productOption.selected];
                                restPrice = currentOrderPrint.price;
                                restCalories = currentOrderPrint.calories;
                            }
                            return {
                                ...productOption,
                                selected: productOption.isMultiple ? [...productOption.selected, id] : nextSelected
                            };
                        }

                        return productOption;
                    }),
                    price: state.currentOrder.price += selectedOption.price - restPrice,
                    totalCalories: state.currentOrder.totalCalories += selectedOption.calories - restCalories,
                },
                pending: false,
            };
        case actionTypes.CLEAR_SELECTED_OPTION:
            const { indexr, idr, optionr } = get(action, 'payload', {});

            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    productOptions: state.currentOrder.productOptions.map((productOption, i) =>
                        i === indexr ? { ...productOption, selected: remove(productOption.selected, selected => selected !== idr) } : productOption),
                    price: state.currentOrder.price -= optionr.price,
                    totalCalories: state.currentOrder.totalCalories -= optionr.calories,
                }
            }
        default:
            return state;
    }
}
