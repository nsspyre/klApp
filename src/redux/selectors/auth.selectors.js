import { get } from 'lodash';

export const isAuthLoading = state => get(state, 'auth.isLoading');
export const isAuthLoaded = state => get(state, 'auth.isLoaded');
export const error = state => get(state, 'auth.error')