import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '@constants';

export function* setCurrentOrder({ payload }) {
    const { name, _id, description, img, price, calories, productOptions } = payload;

    const currentOrder = {
        name,
        price,
        _id,
        description,
        img,
        totalCalories: calories,
        productOptions: productOptions.map(productOption => {
            const isMultiple = productOption.maxQuantity > 1 ? true : false;
            const { isSize } = productOption;

            return {
                ...productOption,
                isMultiple,
                selected: isMultiple ? [] : isSize ? 0 : false,
            }
        })
    }

    yield put({ type: actionTypes.SET_CURRENT_ORDER, currentOrder })
}

export default function* order() {
    yield takeLatest(actionTypes.CURRENT_ORDER, setCurrentOrder)
}
