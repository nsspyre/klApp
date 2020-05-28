import { get } from 'lodash';

export const isPending = state => get(state, 'auth.pending', false);
export const error = state => get(state, 'auth.error', null);
export const hasError = state => get(state, 'auth.error', false) ? true : false;
