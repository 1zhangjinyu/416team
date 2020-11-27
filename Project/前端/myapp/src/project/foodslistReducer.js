function foodslist(state={foods:[]},action){
    if(action.type=='FOODS'){
      return {foods:action.foods};
    }
    return state;
}
export default foodslist;