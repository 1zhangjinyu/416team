function rest(state={restcal:''},action){
    if(action.type=='REST'){
      console.log(action.restcal)
      return {restcal:action.restcal};
    }
    return state;
}
export default rest;