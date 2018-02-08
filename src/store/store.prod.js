import {applyMiddleware, createStore} from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from 'reducers'
import promiseMiddleware from 'redux-promise-middleware';

const middlewares = [ReduxThunk, promiseMiddleware()];
const enhancer = [applyMiddleware(...middlewares)];

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, ...enhancer)
}
