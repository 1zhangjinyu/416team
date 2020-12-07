
const foodreducer = (state={foods:[]},action) => {
    switch(action.type){
        case 'FOOD':
            return {foods:action.foods}
            default:
                return state;
    }
} 

export default foodreducer
