let lunch = [];
function lunchfoods(state=lunch,action){
    if(action.type=='ADDLUN'){
      return [...state,action.lunchfoods];
    }
    return state;
}
export default lunchfoods;