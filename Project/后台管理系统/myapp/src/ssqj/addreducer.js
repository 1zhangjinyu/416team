
const addreducer = (state={add:[]},action) => {
    switch(action.type){
        case 'ADD':
            return {add:action.add}
            default:
                return state;
    }
} 

export default addreducer
