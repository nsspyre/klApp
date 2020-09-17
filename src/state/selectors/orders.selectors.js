import { get } from 'lodash';

export const isPending = state => get(state, 'orders.pending', false);
export const error = state => get(state, 'orders.error', null);
export const hasError = state => get(state, 'orders.error', false) ? true : false;
export const getCurrentProduct = state => get(state, 'orders.currentOrder', {});
export const getCurrentProductOptions = state => get(getCurrentProduct(state), 'productOptions', {});
