function infors(state={},action){
    if(action.type=='DATA'){
      return action.data;
    }
    return state;
}
export default infors;