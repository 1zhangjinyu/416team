
let nice = [];

function collectlist(state=nice,action){
    if(action.type=='ADD_TODO'){
        // 不可变对象
        return [...state,action.tre]
    }
    if(action.type=='DEL_TODO'){
        // action.index
        let arr = [...state];
        arr.splice(action.index,1);
        return arr;
    }
    return state;
}
export default collectlist;



