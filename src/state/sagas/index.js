import { all } from 'redux-saga/effects';
import auth from './auth.saga';
import feed from './feed.saga';

export default function* rootSaga() {
    yield all([
        auth(),
        feed(),
    ]);
}
