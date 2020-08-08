import { combineReducers } from 'redux';

import auth from './auth.reducer';
import feed from './feed.reducer';
import products from './product.reducer';

const rootReducer = combineReducers({
    auth,
    feed,
    products,
});

export default rootReducer;
