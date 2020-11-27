let collectdata=[];
function Shoucang(state=collectdata,action){
    if(action.type=='ADD_LIST'){
        console.log(action);
        return [...state,action.value]
    }
    if(action.type=='DELETE_LIST'){
        let arr = [...state];
        arr.splice(action.index,1);
        return arr;
    }
    return state;
}
export default Shoucang;