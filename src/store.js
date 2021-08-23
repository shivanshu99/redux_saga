import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer from './rootReducer'
import {onLoadPost} from './sagas'
const sagaMiddleware=createSagaMiddleware();

const middlewares=[logger,sagaMiddleware];

export const store=createStore(rootReducer,applyMiddleware(...middlewares))
sagaMiddleware.run(onLoadPost);
export default store;