
const keepreducer = (state={keep:[]},action) => {
    switch(action.type){
        case 'KEEP':
            return {keep:action.keep}
            default:
                return state;
    }
} 

export default keepreducer
