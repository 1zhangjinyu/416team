
const conreducer = (state={cont:[]},action) => {
    switch(action.type){
        case 'CON':
            return {cont:action.cont}
            default:
                return state;
    }
} 

export default conreducer