const inforReducer=(state={users:[]},action)=>{
    switch(action.type){
        case 'INFORMATION':
            // console.log(action.users);
            return {users:action.users};

        case 'DELETEUSER':
            return{users:action.users}
        // case 'UPDATEUSER':
        //     return {users:action.users}
        default:
            return state;
    }
}

export default inforReducer;