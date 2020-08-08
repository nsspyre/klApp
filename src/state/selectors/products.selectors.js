import { get } from 'lodash';

export const isPending = state => get(state, 'products.pending', false);
export const error = state => get(state, 'products.error', null);
export const hasError = state => get(state, 'products.error', false) ? true : false;
export const getProducts = state => get(state, 'products.data', {});
