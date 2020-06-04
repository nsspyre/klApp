import { combineReducers } from 'redux';

import auth from './auth.reducer';
import feed from './feed.reducer';

const rootReducer = combineReducers({
    auth,
    feed,
});

export default rootReducer;
