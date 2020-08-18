import { combineReducers } from 'redux';

import auth from './auth.reducer';
import feed from './feed.reducer';
import products from './product.reducer';
import orders from './order.reducer';

const rootReducer = combineReducers({
    auth,
    feed,
    products,
    orders,
});

export default rootReducer;
