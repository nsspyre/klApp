import { get } from 'lodash';

export const isPending = state => get(state, 'orders.pending', false);
export const error = state => get(state, 'orders.error', null);
export const hasError = state => get(state, 'orders.error', false) ? true : false;
export const getCurrentOrder = state => get(state, 'orders.currentOrder', {});
export const getCurrentProductOptions = state => get(getCurrentOrder(state), 'productOptions', {});
export const getTotalPrice = state => get(getCurrentOrder(state), 'price', 0);
export const getTotalCalories = state => get(getCurrentOrder(state), 'totalCalories', 0);
