import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import foodslist from './reducer/foodslistReducer';
import recommendlist from './reducer/recommendReducer';
import thunk from 'redux-thunk';
import shoucang from './reducer/CollectReducer';
import dianzan from './reducer/TrendsReducer';
import comparefoods from './reducer/comparefoodsReducer';
import weightlist from './reducer/AddweightReducer'
import breakfastfoods from './reducer/addbreakfastReducer';
import lunchfoods from './reducer/addlunchReducer';
import dinnerfoods from './reducer/adddinnerReducer';
import login from './reducer/loginReducer';
import rest from './reducer/restReducer';
import healthlist from './reducer/healthReducer';
import myfoodslist from './reducer/myfoodReducer';
import inforlist from './reducer/inforReducer';
import dongtailist from './reducer/dongtaiReducer'
import mydtlist from './reducer/mydtReducer'
import infors from './reducer/inforsReducer';
let rootReducer = combineReducers({foodslist,breakfastfoods,login,dianzan,healthlist,
    shoucang,comparefoods,recommendlist,weightlist,lunchfoods,dinnerfoods,rest,myfoodslist,inforlist,dongtailist,mydtlist,infors})

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;

