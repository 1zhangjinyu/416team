
const InforDetailReducer=(state={information:''},action)=>{
    switch(action.type){
        case 'INFORMATION':
            return {information:action.information}
        default:
            return state;
        }
}
export default InforDetailReducer;