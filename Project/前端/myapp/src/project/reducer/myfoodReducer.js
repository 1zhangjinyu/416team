let myfoods = [];
function myfoodslist(state=myfoods,action){
    if(action.type=='ADDMY'){
        console.log(action.myfoods)
      return action.myfoods;
    }
    return state;
}
export default myfoodslist;