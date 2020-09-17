import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '@constants';

export function* setCurrentOrder({ payload }) {
    const { name, price, _id, description, img, productOptions } = payload;

    const currentOrder = {
        name,
        price,
        _id,
        description,
        img,
        productOptions: productOptions.map(productOption => {
            const isMultiple = productOption.maxQuantity > 1 ? true : false;

            return {
                ...productOption,
                isMultiple,
                selected: isMultiple ? [] : false,
            }
        })
    }

    yield put({ type: actionTypes.SET_CURRENT_ORDER, currentOrder })
}

export default function* order() {
    yield takeLatest(actionTypes.CURRENT_ORDER, setCurrentOrder)
}
