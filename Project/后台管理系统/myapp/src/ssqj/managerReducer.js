
const managerReducer=(state={upmanager:''},action)=>{
    switch(action.type){
        case 'CHANGEMANAGER':
            return {upmanager:action.upmanager}
        default:
            return state;
        }
}
export default managerReducer;