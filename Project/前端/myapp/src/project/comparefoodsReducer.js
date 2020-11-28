function comparefoods(state={comparefoods:[]},action){
    if(action.type=='RANK'){
      return {comparefoods:action.comparefoods};
    }
    return state;
}
export default comparefoods;