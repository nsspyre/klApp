import { get } from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const isPending = state => get(state, 'auth.pending', false);
export const error = state => get(state, 'auth.error', null);
export const hasError = state => get(state, 'auth.error', false) ? true : false;
export const user = state => get(state, 'auth.data', {});
export const isLoggedIn = state => get(state, 'auth.isLoggedIn', false) && AsyncStorage.getItem('token');
