import  { createStore,compose,combineReducers,applyMiddleware }  from  'redux';
import losefood from './losereducer'
import addfood from './addreducer'
import eatfood from './eatreducer'
import keepfood from './keepreducer'
import foodnote from './foodreducer'
import login from './loginReducer'
import manager from './managerReducer'
import infor from './inforReducer'
import target from './targetReducer'
import func from './funcreducer'
import contents from './contreducer'
import adduser from './addReducer1'
import changeuser from './changeuserReducer'
//import thunk from 'redux-thunk'
let rootReducer =combineReducers({
  eatfood,
  addfood,
  losefood,
  keepfood,
  foodnote,
  login,
  manager,
  infor,
  target,
  func,
  contents,
  changeuser,
  adduser
 })

 function logger({ getState }) {
    return (next) => (action) => {
      //console.log('will dispatch', action)
  
      // 调用 middleware 链中下一个 middleware 的 dispatch。
      let returnValue = next(action)
  
     // console.log('state after dispatch', getState())
  
      // 一般会是 action 本身，除非
      // 后面的 middleware 修改了它。
      return returnValue
    }
  }
  const thunk=({ dispatch, getState }) => (next) => (action) => {
      //console.log(thunk)
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    return next(action);
  };
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(logger,thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
     );
export default store
