//用户信息页搜索用户
const targetReducer =(state={targetuser:''},action)=>{
    switch(action.type){
        case 'SEARCHID':
            return {targetuser:action.targetuser};
        default:
            return state;
    }
}
export default targetReducer;