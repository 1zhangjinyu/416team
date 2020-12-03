
const managerReducer=(state={managerdetail:''},action)=>{
    switch(action.type){
        case 'MANAGERDETAIL':
            return {managerdetail:action.managerdetail}
        default:
            return state;
        }
}
export default managerReducer;