import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import foodslist from './foodslistReducer';
import thunk from 'redux-thunk';
import shoucang from './shoucangReducer';
let rootReducer = combineReducers({foodslist,shoucang})
const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;

