import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import foodslist from './foodslistReducer';
import recommendlist from './recommendReducer';
import thunk from 'redux-thunk';
import shoucang from './shoucangReducer';
import comparefoods from './comparefoodsReducer';
<<<<<<< HEAD
import weightlist from './AddweightReducer'
let rootReducer = combineReducers({foodslist,shoucang,comparefoods,weightlist})
=======
import breakfastfoods from './addbreakfastReducer';
let rootReducer = combineReducers({foodslist,breakfastfoods,shoucang,comparefoods,recommendlist})
>>>>>>> a36b888f7bcf25f012bcc40cab25e482495c453d
const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;

