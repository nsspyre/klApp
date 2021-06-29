import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from '../reducers';
import rootSaga from '../sagas'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [
        'navigation',
    ],
    whitelist: [
        'auth',
    ],
};

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function configureStore() {
    /* ------------- Redux Configuration ------------- */
    const middlewares = [];

    /* ------------- Saga Middleware ------------- */
    const sagaMiddleware = createSagaMiddleware();
    middlewares.push(sagaMiddleware);

    /* ------------- Assemble Middleware ------------- */
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = createStore(persistedReducer, enhancer);
    const persistor = persistStore(store);

    // kick off root saga
    sagaMiddleware.run(rootSaga)

    return {
        store, persistor
    };
};
