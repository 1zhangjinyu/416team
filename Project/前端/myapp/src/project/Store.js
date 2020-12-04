import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import foodslist from './foodslistReducer';
import recommendlist from './recommendReducer';
import thunk from 'redux-thunk';
import shoucang from './CollectReducer';
import dianzan from './TrendsReducer';
import comparefoods from './comparefoodsReducer';
import weightlist from './AddweightReducer'
import breakfastfoods from './addbreakfastReducer';
import lunchfoods from './addlunchReducer';
import dinnerfoods from './adddinnerReducer';
import login from './loginReducer';
import rest from './restReducer';
import healthlist from './healthReducer';
let rootReducer = combineReducers({foodslist,breakfastfoods,login,dianzan,healthlist,
    shoucang,comparefoods,recommendlist,weightlist,lunchfoods,dinnerfoods,rest})
const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;

