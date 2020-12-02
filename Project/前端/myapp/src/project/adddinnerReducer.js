let dinner = [];
function dinnerfoods(state=dinner,action){
    if(action.type=='ADDDIN'){
      return [...state,action.dinnerfoods];
    }
    return state;
}
export default dinnerfoods;