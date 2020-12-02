
function login(state={user:''},action){
    if(action.type=='LOGIN'){
      console.log(action.user)
      return {user:action.user};
    }
    return state;
}
export default login;