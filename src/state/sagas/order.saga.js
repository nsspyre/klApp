import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '@constants';

export function* setCurrentOrder({ payload }) {
    const { name, price, _id, description, img, sizes, options } = payload;

    const currentOrder = {
        name,
        price,
        _id,
        description,
        img,
        sizes: {
            sizes,
            isMultiple: false,
            isSize: true,
            sizesSelected: 1,
            name: 'Tamaño',
        },
        options: options.map(option => {
            const isMultiple = option.maxQuantity > 1 ? true : false;

            return {
                ...option,
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
