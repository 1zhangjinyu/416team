
function dongtailist(state={dongtai:[]},action){
    if(action.type=='DT'){
      console.log(action.dongtai)
      return {dongtai:action.dongtai};
    }
    return state;
}
export default dongtailist;