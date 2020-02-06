import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootResucer from '../reducers';
import rootSaga from '../sagas'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    return {
        ...createStore(rootResucer, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga)
    };
};

export default configureStore;
