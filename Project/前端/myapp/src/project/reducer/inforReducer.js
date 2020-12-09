
function inforlist(state={},action){
    if(action.type=='INFOR'){
        
      return action.infor;
    }
    return state;
}
export default inforlist;