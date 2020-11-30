function recommendlist(state={recommendfoods:[]},action){
    if(action.type=='RECOMMEND'){
      return {recommendfoods:action.recommendfoods};
    }
    return state;
}
export default recommendlist;