let compares = [];
function comparefoods(state=compares,action){
    if(action.type=='RANK'){
      return [...state,action.comparefoods];
    }
    return state;
}
export default comparefoods;