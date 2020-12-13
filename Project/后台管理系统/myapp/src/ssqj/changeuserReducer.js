const changeuserReducer=(state={ifok:[]},action)=>{
    switch(action.type){
        case 'UPDATEUSER':
            // console.log(action.ifok)
            return {ifok:action.ifok}
        default:
            return state;
    }
}

export default changeuserReducer;