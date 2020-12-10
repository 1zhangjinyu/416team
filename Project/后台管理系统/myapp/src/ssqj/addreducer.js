const addReducer=(state={addres:''},action)=>{
    switch(action.type){
        case 'ADDUSER':
            return {addres:action.addres}
        default:
            return state;
    }
}

export default addReducer;