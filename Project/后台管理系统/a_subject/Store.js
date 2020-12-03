import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import login from './loginReducer';
import manager from './managerReducer';
import infodetail from './InforReducer'
let rootReducer = combineReducers({login,manager,infodetail})
// console.log(login.managers)
const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;