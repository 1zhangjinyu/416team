import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import foodslist from './foodslistReducer';
import thunk from 'redux-thunk';
import shoucang from './shoucangReducer';
import comparefoods from './comparefoodsReducer';
import weightlist from './AddweightReducer'
let rootReducer = combineReducers({foodslist,shoucang,comparefoods,weightlist})
const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;

