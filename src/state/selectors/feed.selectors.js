import { get } from 'lodash';

export const isPending = state => get(state, 'feed.pending', false);
export const error = state => get(state, 'feed.error', null);
export const hasError = state => get(state, 'feed.error', false) ? true : false;
export const getFeed = state => get(state, 'feed.data', {});
