let breakfast = [];
function breakfastfoods(state=breakfast,action){
    if(action.type=='ADDBRE'){
      return [...state,action.breakfastfoods];
    }
    return state;
}
export default breakfastfoods;