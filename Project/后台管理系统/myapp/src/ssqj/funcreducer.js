
const funcreducer = (state={rets:''},action) => {
    switch(action.type){
        case 'RET':
            return {rets:action.rets}
            default:
                return state;
    }
} 

export default funcreducer 
