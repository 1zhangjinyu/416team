
const eatreducer = (state={eats:[]},action) => {
    switch(action.type){
        case 'EAT':
            return {eats:action.eats}
            default:
                return state;
    }
} 

export default eatreducer
