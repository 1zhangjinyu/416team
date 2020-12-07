function weightlist(state={weights:[]},action){
    if(action.type=='ADD-WEIGHT'){
      return {weights:action.weights};
    }
    return state;
}
export default weightlist;