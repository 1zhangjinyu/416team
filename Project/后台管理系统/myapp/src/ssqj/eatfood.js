
const eatfood = (props) => {
    return (dispatch)=>{
         let url='https://www.liucl.xyz:1770/eat'
        fetch(url,{
            method:'post',

        })
        .then(res=>res.json())
        .then(res=>{
            dispatch({
                type:'EAT',
                eats:res,
            })
            
        })
    }
}
export {eatfood}