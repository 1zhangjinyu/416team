const changeuserReducer=(state={ifok:''},action)=>{
    switch(action.type){
        case 'UPDATEUSER':
            return {ifok:action.ifok}
        default:
            return state;
    }
}

export default changeuserReducer;