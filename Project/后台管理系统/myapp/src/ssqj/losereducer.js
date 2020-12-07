
const losereducer = (state={lose:[]},action) => {
    switch(action.type){
        case 'LOSE':
            return {lose:action.lose}
            default:
                return state;
    }
} 

export default losereducer
