import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import apiMiddleware from './middlewares/apiMiddleware';

const configureStore = () => {
  const middlewares = [apiMiddleware, thunk, createLogger({ collapsed: true })];
  return createStore(rootReducer, compose((applyMiddleware as any)(...middlewares)));
};

export default configureStore;
