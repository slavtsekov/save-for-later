import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import foldersReducer from '../reducers/folders';
import linksReducer from '../reducers/links';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getStore = () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            folders: foldersReducer,
            links: linksReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};

export { getStore as default };
