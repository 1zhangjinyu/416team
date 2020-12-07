
const foodnote = (props) => {
    return (dispatch)=>{
         let url='https://www.liucl.xyz:1770/food'
        fetch(url,{
            method:'post',

        })
        .then(res=>res.json())
        .then(res=>{
            dispatch({
                type:'FOOD',
                foods:res,
            })
            
        })
    }
}
export {foodnote}