let mydt = [];
function mydtlist(state=mydt,action){
    if(action.type=='ADDMYDT'){
        console.log(action.mydt)
      return action.mydt;
    }
    return state;
}
export default mydtlist;