
let todo = [];

function shoucang(state=todo,action){
    if(action.type=='ADD'){
        // 不可变对象
        return [...state,action.col]
    }
    if(action.type=='DEL'){
        // action.index
        let arr = [...state];
        arr.splice(action.index,1);
        return arr;
    }
    return state;
}
export default shoucang;



