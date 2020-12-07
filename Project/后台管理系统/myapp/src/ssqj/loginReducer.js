const loginReducer=(state={managers:''},action)=>{
    switch(action.type){
        case 'MANAGER':
            console.log(action.managers);

            return {managers:action.managers};
        default:
            return state;
    }
}
export default loginReducer;