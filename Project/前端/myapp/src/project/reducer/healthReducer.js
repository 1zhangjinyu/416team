function healthlist(state={health:[]},action){
    if(action.type=='GET'){
      return {health:action.health};
    }
    return state;
}
export default healthlist;