import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const defaultState = { };

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, defaultState, enhancers);
export default store;
