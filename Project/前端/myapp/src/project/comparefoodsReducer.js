let compares = [];
function comparefoods(state=compares,action){
    if(action.type=='COMPARE'){
      return [...state,action.comparefoods];
    }
    if(action.type=='DELETE_COMPARE'){
      compares=[];
      return compares;
  }
  return state;
}
export default comparefoods;