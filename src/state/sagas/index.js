import { all } from 'redux-saga/effects';
import auth from './auth.saga';
import feed from './feed.saga';
import products from './product.saga';

export default function* rootSaga() {
    yield all([
        auth(),
        feed(),
        products(),
    ]);
}
