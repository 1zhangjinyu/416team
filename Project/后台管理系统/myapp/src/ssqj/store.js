import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import login from './loginReducer';
import manager from './managerReducer'
import infor from './inforReducer'
import target from './targetReducer'
import changeuser from './changeuserReducer'
import adduser from './addReducer'

let rootReducer = combineReducers({login,manager,infor,target,changeuser,adduser})
// console.log(login.action)
const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;